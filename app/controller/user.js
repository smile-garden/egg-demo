'use strict';

const { Controller } = require('egg');
const id = '644b9b80fcafe45ec0472e95';

const createRule = {
  userName: {
    type: 'string',
    min: 5,
    max: 20,
    format: /^[\u4e00-\u9fa5A-Za-z0-9_]{5,20}$/,
  },
  password: {
    type: 'password',
    min: 6,
    max: 20,
    format: /^[A-Za-z0-9_]{6,20}$/,
  },
};

const userInfo = {
  userName: 'name0',
  password: '1234560',
};


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
    ctx.validate(createRule, userInfo);
    const res = await ctx.service.user.login(userInfo);
    console.log(res, 'login');
    ctx.body = res;
  }
  async logout() {
    const { ctx } = this;
    ctx.body = '退出';
  }
}

module.exports = UserController;
