'use strict';

const Service = require('egg').Service;
class RegIsterService extends Service {
  async insert(item) {
    try {
      return await this.app.mysql.insert('log', item)
    } catch (error) {
      return await this.update(item)
    }
  }
  async update(item) {
    return await this.app.mysql.update('log', {
      code: item.code
    }, {
      where: {
        mail: item.mail
      }
    })
  }
  async find(mail) {
    const result = await this.app.mysql.get('log', {
      mail
    })
    return result ? result : this.ctx.throw(402, '无此用户信息')
  }
}

module.exports = RegIsterService;
