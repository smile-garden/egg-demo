'use strict';

const { Controller } = require('egg');

class WorkController extends Controller {
  async index() {
    const { ctx } = this;
    const { body } = ctx.request;
    const res = await ctx.service.work.get(body);
    const one = await ctx.service.work.create({ name: '新增3' });
    console.log('controller', res, one);
    ctx.body = one;
  }
}

module.exports = WorkController;
