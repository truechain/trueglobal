'use strict';
const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const regRule = {
      mail: 'string',
      password: 'string',
    }
    ctx.validate(regRule, body)

    const hash = this.ctx.helper.cryptPwd(body.mail, +new Date());
    const result = await service.user.add(body)
    const status = await this.service.mail.sendMail(null, body.mail, hash);
    await service.log.add({
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