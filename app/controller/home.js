'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      code: 0,
      message: '__请求成功__',
      data: null,
    };
  }
}

module.exports = HomeController;
