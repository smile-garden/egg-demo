const { Service } = require('egg');

class WorkService extends Service {
  async create(obj) {
    const { ctx } = this;
    const res = await ctx.model.Work.create(obj);
    console.log(res, 'create one');
    return {
      msg: '新增 成功',
    };
  }
  async get() {
    const { ctx } = this;
    await ctx.model.Work.find();
    // await ctx.model.One.find();
    // console.log(res, 'service', one);
  }
}

module.exports = WorkService;
