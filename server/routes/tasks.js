// @ts-check

import i18next from 'i18next';

export default (app) => {
  const UserModel = app.objection.models.user;
  const StatusModel = app.objection.models.status;
  const LabelModel = app.objection.models.label;
  const TaskModel = app.objection.models.task;

  const getRelatedData = async () => {
    const [users, statuses, labels] = await Promise.all([
      UserModel.query(),
      StatusModel.query(),
      LabelModel.query(),
    ]);
    return { statuses, users, labels };
  };

  app
    .get('/tasks', { name: 'tasks', preValidation: app.authenticate }, async (req, reply) => {
      const { query: filterQuery } = req;
      let query = TaskModel.query();
      query = query.modify(filterQuery.status ? 'filterStatus' : 'defaultSelects', filterQuery.status);
      query = query.modify(filterQuery.executor ? 'filterExecutor' : 'defaultSelects', filterQuery.executor);
      query = query.modify(filterQuery.label ? 'filterLabel' : 'defaultSelects', filterQuery.label);
      query = query.modify(filterQuery.isCreatorUser ? 'filterIsCreatorUser' : 'defaultSelects', req.user.id);
      const tasks = await query.withGraphFetched('[status, creator, executor, labels]');
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/index', {
        tasks, users, statuses, labels, form: filterQuery,
      });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new TaskModel();
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/new', {
        task, users, statuses, labels,
      });
      return reply;
    })
    .post('/tasks', { preValidation: app.authenticate }, async (req, reply) => {
      const originalData = req.body.data;
      const labelIds = [].concat((req.body.data.labels || [])).map((l) => ({ id: Number(l) }));
      const taskData = {
        ...originalData,
        statusId: Number(originalData.statusId),
        executorId: Number(originalData.executorId) || null,
        creatorId: req.user.id,
        labels: labelIds,
      };
      try {
        await TaskModel.transaction(async (trx) => {
          await TaskModel.query(trx)
            .allowGraph('labels')
            .upsertGraph(taskData, {
              relate: true, unrelate: true, noDelete: true,
            });
        });
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.create.error'));
        const { users, statuses, labels } = await getRelatedData();
        reply.render('tasks/new', {
          task: originalData, statuses, users, labels, errors: data,
        });
      }
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const task = await TaskModel.query().withGraphFetched('[labels]').findById(id);
      const { users, statuses, labels } = await getRelatedData();
      reply.render('tasks/edit', {
        task, users, statuses, labels,
      });
      return reply;
    })
    .get('/tasks/:id', { name: 'oneTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const task = await TaskModel.query().withGraphFetched('[status, creator, executor, labels]').findById(id);
      reply.render('tasks/show', { task });
      return reply;
    })
    .patch('/tasks/:id', { preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const originalData = req.body.data;
      const labelIds = [].concat((req.body.data.labels || [])).map((l) => ({ id: Number(l) }));
      const taskData = {
        ...originalData,
        id: Number(id),
        statusId: Number(originalData.statusId),
        executorId: Number(originalData.executorId) || null,
        creatorId: req.user.id,
        labels: labelIds,
      };
      try {
        await TaskModel.transaction(async (trx) => {
          await TaskModel.query(trx)
            .allowGraph('labels')
            .upsertGraph(taskData, {
              relate: true, unrelate: true, undelete: true,
            });
        });
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.tasks.update.error'));
        const { users, statuses, labels } = await getRelatedData();
        reply.render('tasks/edit', {
          task: { ...originalData, id }, statuses, users, labels, errors: data,
        });
      }
      return reply;
    })
    .delete('/tasks/:id', { preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.params;
      const task = await TaskModel.query().findById(id);
      try {
        TaskModel.transaction(async (trx) => {
          await task.$relatedQuery('labels', trx).unrelate();
          await task.$query(trx).delete();
        });
        req.flash('info', i18next.t('flash.tasks.delete.success'));
      } catch (e) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
      }
      reply.redirect(app.reverse('tasks'));
    });
};
