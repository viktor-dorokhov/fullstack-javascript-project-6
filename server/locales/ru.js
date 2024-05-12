// @ts-check

export default {
  translation: {
    appName: 'Менеджер задач',
    sourceCode: 'Исходный код',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          success: 'Пользователь успешно зарегистрирован',
          error: 'Не удалось зарегистрировать',
        },
        update: {
          success: 'Пользователь успешно изменён',
          error: 'Не удалось изменить пользователя',
        },
        delete: {
          success: 'Пользователь успешно удалён',
          error: 'Не удалось удалить пользователя',
        },
        onlyOwnerAccess: 'Вы не можете редактировать или удалять другого пользователя',
      },
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Не удалось создать статус',
        },
        update: {
          success: 'Статус успешно изменён',
          error: 'Не удалось изменить статус',
        },
        delete: {
          success: 'Статус успешно удалён',
          error: 'Не удалось удалить статус',
        },
      },
      labels: {
        create: {
          success: 'Метка успешно создана',
          error: 'Не удалось создать метку',
        },
        update: {
          success: 'Метка успешно изменён',
          error: 'Не удалось изменить метку',
        },
        delete: {
          success: 'Метка успешно удалён',
          error: 'Не удалось удалить метку',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        statuses: 'Статусы',
        labels: 'Метки',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      session: {
        email: 'Email',
        password: 'Пароль',
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        users: 'Пользователи',
        id: 'ID',
        firstName: 'Имя',
        lastName: 'Фамилия',
        fullName: 'Полное имя',
        email: 'Email',
        password: 'Пароль',
        actions: 'Действия',
        updateAction: 'Изменить',
        deleteAction: 'Удалить',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        update: {
          title: 'Изменение пользователя',
          submit: 'Изменить',
        },
      },
      statuses: {
        statuses: 'Статусы',
        createAction: 'Создать статус',
        id: 'ID',
        name: 'Имя',
        updateAction: 'Изменить',
        deleteAction: 'Удалить',
        createdAt: 'Дата создания',
        new: {
          title: 'Создание статуса',
          submit: 'Создать',
        },
        update: {
          title: 'Изменение статуса',
          submit: 'Изменить',
        },
      },
      labels: {
        labels: 'Метки',
        createAction: 'Создать метку',
        id: 'ID',
        name: 'Имя',
        updateAction: 'Изменить',
        deleteAction: 'Удалить',
        createdAt: 'Дата создания',
        new: {
          title: 'Создание метки',
          submit: 'Создать',
        },
        update: {
          title: 'Изменение метки',
          submit: 'Изменить',
        },
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
    },
  },
};
