'use strict';

const { Controller } = require('egg');

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api api api';
  }
}

module.exports = ApiController;
