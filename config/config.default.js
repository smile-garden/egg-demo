/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1681542984950_8139';

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.static = {
    prefix: '/assets/',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.session = {
    key: 'ONE_SMILE',
    httpOnly: true,
    maxAge: 1000 * 10,
    renew: true,
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // add your middleware config here
  config.middleware = [
    'robot',
    'counter',
    'errorHandler',
  ];
  config.robot = {
    ua: [ /Baiduspider/i ],
  };
  config.errorHandler = {
    match: '/api',
  };

  config.mongoose = {
    /* client: {
      url: 'mongodb://smile:123456@127.0.0.1:27017/company',
      options: {
        useUnifiedTopology: true,
      },
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    }, */
    clients: {
      company: {
        url: 'mongodb://smile:123456@127.0.0.1:27017/company',
        options: {
          useUnifiedTopology: true,
        },
      },
      demo: {
        url: 'mongodb://demouser:123456@127.0.0.1:27017/demo',
        options: {
          useUnifiedTopology: true,
        },
      },
    },
    plugins: [],
  };

  config.jwt = {
    secret: '615243',
    enable: false, // 默认 false true 对所有请求进行自动校验
    // match: /^\/api/,
    sign: {
      expiresIn: 10,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
