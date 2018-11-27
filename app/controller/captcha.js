'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const {
      data,
      text,
    } = svgCaptcha.create();
    console.log(text);
    this.ctx.session.captcha = text;
    this.ctx.body = {
      status: 0,
      message: '图形验证成功',
      data,
    };
  }
  async smsCaptcha() {
    const {
      ctx,
      service
    } = this;

    const { body } = ctx.request;
    const smsRule = {
      mail: 'string',
    };
    ctx.validate(smsRule, ctx.request.body);

    const nowDate = +new Date();
    const expired = 60;

    if ((nowDate - ctx.session.lastTime) / 1000 < expired) {
      ctx.throw(403, '一分钟内不能频繁请求');
    }
    this.ctx.session.lastTime = +new Date();

    const status = await this.service.mail.sendMail(null, body.mail);
    const { insertId } = await service.log.add({
      mail: body.mail,
      status,
    });

    ctx.body = {
      status,
      message: '发送成功',
      data: insertId,
    };
  }
}

module.exports = CaptchaController;