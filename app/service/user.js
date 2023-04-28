const { Service } = require('egg');

class UserService extends Service {
  async add() {
    const { ctx } = this;
    const len = await ctx.model.User.count();
    const res = await ctx.model.User.create({
      id: len,
      userName: 'name' + len,
      password: '1234456',
    });
    return res;
  }
  async delete(id) {
    const { ctx } = this;
    const res = await ctx.model.User.deleteOne({ _id: id });
    console.log(res, 'delete');
    return res;
  }
  async update(id, data) {
    const { ctx } = this;
    const res = await ctx.model.User.updateOne({ _id: id }, data);
    console.log(res, 'update');
    return res;
  }
  async get(id) {
    const { ctx } = this;
    const res = await ctx.model.User.findOne({ _id: id });
    return res;
  }
  async login(data) {
    const { ctx } = this;
    const res = await ctx.model.User.create(data);
    return res;
  }
}

module.exports = UserService;
