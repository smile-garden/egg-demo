'use strict';

const { Controller } = require('egg');
const id = '644b9b80fcafe45ec0472e95';

class UserController extends Controller {
  async add() {
    const { ctx } = this;
    const res = await ctx.service.user.add();
    ctx.body = JSON.stringify(res);
  }
  async delete() {
    const { ctx } = this;
    const res = await ctx.service.user.delete(id);
    ctx.body = JSON.stringify(res);
  }
  async update() {
    const { ctx } = this;
    const res = await ctx.service.user.update(id, { password: '999999' });
    ctx.body = JSON.stringify(res);
  }
  async get() {
    const { ctx } = this;
    const res = await ctx.service.user.get(id);
    ctx.body = JSON.stringify(res);
  }
  async login() {
    const { ctx } = this;
    const res = await ctx.service.user.add({ userName: 'name1', password: '1234456' });
    ctx.body = JSON.stringify(res);
  }
}

module.exports = UserController;
