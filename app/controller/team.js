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
      'phone': 'number',
    };
    // debugger
    ctx.validate(teamRule, ctx.request.body);
    const result = await service.team.create(ctx.request.body);

    ctx.body = {
      code: 0,
      message: '添加成功',
      data: result,
    }
  }
}

module.exports = TeamController;
