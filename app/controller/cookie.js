'use strict';

const { Controller } = require('egg');

class CookieController extends Controller {
  async index() {
    const { ctx } = this;
    const { userName: name, counter } = ctx.session;
    await ctx.render('cookie.tpl', { title: 'cookie page', name, counter });
  }

  async add() {
    const { ctx } = this;
    ctx.cookies.set('cookie', 'demo', {
      maxAge: 1000 * 60,
      httpOnly: false,
    });
    ctx.session.userName = 'one smile (一笑)';
    ctx.body = {
      status: 200,
      data: 'Cookie 添加成功',
    };
  }

  async show() {
    const { ctx } = this;
    const cookie = ctx.cookies.get('cookie', {
      encrypt: true,
    });
    console.log(cookie, ctx.session.counter);
    ctx.body = {
      status: 200,
      data: 'Cookie 显示成功',
    };
  }

  async update() {
    const { ctx } = this;
    ctx.cookies.set('cookie', 'update demo有中文', {
      encrypt: true,
    });
    ctx.body = {
      status: 200,
      data: 'Cookie 更新成功',
    };
  }

  async del() {
    const { ctx } = this;
    ctx.cookies.set('cookie', null);
    ctx.body = {
      status: 200,
      data: 'Cookie 删除成功',
    };
  }
}

module.exports = CookieController;
