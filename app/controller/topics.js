const { Controller } = require('egg');

// 定义创建接口的请求参数规则
const createRule = {
  accessToken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

class TopicController extends Controller {
  async create() {
    const { ctx } = this;
    /* 校验 ctx.request.body 是否符合预期格式
    如果参数未通过，将抛出一个 status = 422 的异常 */
    ctx.validate(createRule, ctx.request.body);
    // 调用 service 创建一个 topic
    const id = await ctx.service.topics.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      topic_id: id,
    };
    ctx.status = 201;
  }
}

module.exports = TopicController;
