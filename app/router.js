'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/detail/:id/:tag', controller.home.detail);
  router.post('/add', controller.home.add);
  router.post('/json', controller.home.json);
  router.get('/news', controller.news.list);
  router.get('/smile', controller.smile.index);

  app.router.resources('topics', '/api/v2/topics', app.controller.topics);
};
