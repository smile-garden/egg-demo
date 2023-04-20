'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/news', controller.news.list);
  router.get('/smile', controller.smile.index);

  app.router.resources('topics', '/api/v2/topics', app.controller.topics);
};
