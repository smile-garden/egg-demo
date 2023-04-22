'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const counter = app.middleware.counter(); // 路由中间件
  router.get('/', controller.home.index);
  // router.get('/list', counter, controller.home.list);
  router.get('/list', controller.home.list);
  router.get('/detail/:id/:tag', controller.home.detail);
  router.post('/add', controller.home.add);
  router.post('/json', controller.home.json);
  router.get('/news', controller.news.list);
  router.get('/smile', controller.smile.index);
  router.get('/cookie', controller.cookie.index);
  router.post('/cookie/add', controller.cookie.add);
  router.post('/cookie/show', controller.cookie.show);
  router.post('/cookie/update', controller.cookie.update);
  router.post('/cookie/del', controller.cookie.del);

  app.router.resources('topics', '/api/v2/topics', app.controller.topics);
};
