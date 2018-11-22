'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      code: 0,
      message: '请求成功.',
      data: null,
    };
  }
}

module.exports = HomeController;
