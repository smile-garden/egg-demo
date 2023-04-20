const { Service } = require('egg');

class TopicService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  async create(params) {
    const res = await this.ctx.curl(`${this.root}/topics`, {
      method: 'post',
      data: params,
      dataType: 'json',
      contentType: 'json',
    });
    // 检查是否调用成功，如果调用失败抛出异常
    this.checkSuccess(res);
    return res.data.topic_id;
  }

  checkSuccess(res) {
    if (res.status !== 200) {
      const errorMsg = res.data?.error_msg || 'unknown error';
      this.ctx.throw(res.status, errorMsg);
    }
    if (!res.data.success) {
      this.ctx.throw(500, 'remote response error', { data: res.data });
    }
  }
}

module.exports = TopicService;
