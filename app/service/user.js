const { Service } = require('egg');

class UserService extends Service {
  async add() {
    const { ctx } = this;
    const len = await ctx.model.User.count();
    const password = await ctx.helper.genSaltPassword('123456' + len);
    const res = await ctx.model.User.create({
      id: len,
      userName: 'name' + len,
      password,
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
    const { ctx, app } = this;
    const res = await ctx.model.User.findOne({ userName: data.userName });
    if (!res) {
      return '用户不存在';
    }
    const isMatch = await ctx.helper.comparePassword(data.password, res.password);
    const token = app.jwt.sign({ ...res }, app.config.jwt.secret, {
      expiresIn: '1h',
    });
    ctx.cookies.set('token', token, {
      maxAge: 86400000,
      httpOnly: true,
    });
    return isMatch ? '登录成功' : '用户名或密码错误';
  }
}

module.exports = UserService;
