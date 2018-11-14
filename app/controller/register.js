'use strict';
const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const regRule = {
      mail: 'string',
      password: 'string',
      authCode: 'string'
    }
    ctx.validate(regRule, body)
    const { code } = await service.captcha.find(body.mail);

    if(code !== body.authCode) {
      ctx.throw(402, '验证码错误')
    }

    const result = await service.register[body.isReset ? 'update' : 'insert'](body)
    ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    }
  }
}

module.exports = CaptchaController;