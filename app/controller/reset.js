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

    await this.service.user.get(body.mail);
    await this.service.user.updateResetPwd(body);
    const status = await this.service.mail.sendMail(null, body.mail, hash, '3');
    await service.log.updateHash({
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