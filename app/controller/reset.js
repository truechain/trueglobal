'use strict';
const Controller = require('egg').Controller;

class ResetController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const regRule = {
      mail: 'string',
      password: 'string',
    }
    ctx.validate(regRule, body)
    const hash = this.ctx.helper.cryptPwd(body.mail, +new Date());

    // const result = await service.reset.update(body)
    await this.service.login.find(body.mail);
    await this.service.reset.update(body);
    const status = await this.service.mail.sendMail(null, body.mail, hash, '3');
    await service.captcha.update({
      mail: body.mail,
      status,
      hash,
    });
    ctx.body = {
      code: 0,
      message: '成功',
      data: status,
    }
  }
}

module.exports = ResetController;