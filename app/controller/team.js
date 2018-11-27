'use strict';

const Controller = require('egg').Controller;
class TeamController extends Controller {
  async index() {
    const {
      ctx,
      service
    } = this;
    // debugger
    const teamRule = {
      'name': 'string',
      'leader': 'string',
      'phone': 'string',
    };
    // debugger
    ctx.validate(teamRule, ctx.request.body);
    await service.team.add(ctx.request.body);
    const status = await this.service.mail.sendMail(null, ctx.decode.mail, null, '2');
    ctx.body = {
      code: 0,
      message: '添加成功',
      data: status,
    }
  }
}

module.exports = TeamController;
