// @ts-check

import welcome from './welcome.js';
import users from './users.js';
import statuses from './statuses.js';
import labels from './labels.js';
import session from './session.js';

const controllers = [
  welcome,
  users,
  statuses,
  labels,
  session,
];

export default (app) => controllers.forEach((f) => f(app));
