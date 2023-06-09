'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, one smile first egg app';
  }
  async list() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }
  async detail() {
    const { ctx } = this;
    const { id, tag } = ctx.params;
    ctx.body = `detail page id: ${id}, tag: ${tag}, iOS: ${ctx.isIOS}`;
  }
  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
      token: ctx.request.token,
    };
  }
  async json() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}

module.exports = HomeController;
