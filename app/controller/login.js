'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const {
      ctx,
      service
    } = this;
    // debugger
    const loginRule = {
      mail: 'string',
      password: 'string'
    };
    // debugger
    ctx.validate(loginRule, ctx.request.body);

    const token = await service.login.getToken(ctx.request.body);

    ctx.body = {
      code: 0,
      message: '登陆成功',
      data: {
        token,
      },
    };
  }
}

module.exports = HomeController;