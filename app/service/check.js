'use strict';

const Service = require('egg').Service;
class CheckService extends Service {
  async insert(item) {
    try {
      return await this.app.mysql.insert('log', item)
    } catch (error) {
      return await this.update(item)
    }
  }
  async find(mail) {
    const result = await this.app.mysql.get('log', {
      mail
    })
    return result ? result : this.ctx.throw(402, '无此用户信息')
  }
}

module.exports = CheckService;
