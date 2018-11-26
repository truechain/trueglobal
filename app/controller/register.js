'use strict';
const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const regRule = {
      mail: 'string',
      password: 'string',
      // authCode: 'string'
    }
    ctx.validate(regRule, body)
    // const { code } = await service.captcha.find(body.mail);
    const hash = this.ctx.helper.cryptPwd(body.mail, +new Date());

    const result = await service.register.insert(body)
    const status = await this.service.mail.sendMail(null, body.mail, hash);
    // if(code !== body.authCode) {
    //   ctx.throw(402, '验证码错误')
    // }
    await service.captcha.insert({
      mail: body.mail,
      status,
      hash,
    });
    ctx.body = {
      code: 0,
      message: '成功',
      data: result,
    }
  }
}

module.exports = CaptchaController;