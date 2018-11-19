'use strict';
const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const { ctx, service } = this;
    const checkRule = {
      hash: 'string',
    }
    ctx.validate(checkRule, ctx.query)
    const res = await service.captcha.findHash(ctx.query.hash);
    if(res) {
      const { affectedRows } = await service.captcha.update1(res);
      if(affectedRows === 1) {
        this.ctx.body = {
          code: 0,
          message: '激活成功',
          data: null,
        }
      } else {
        ctx.throw(400, '激活失败')
      }
    } else {
      ctx.throw(402, '没有查找到')
    }
  }
}

module.exports = CaptchaController;