'use strict';

const { Controller } = require('egg');

class SmileController extends Controller {
  async index() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = 'one smile');
      }, 5000);
    });
  }
}

module.exports = SmileController;
