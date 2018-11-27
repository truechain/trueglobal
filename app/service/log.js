'use strict';

const Service = require('egg').Service;
class LogService extends Service {
  async add(item) {
    return await this.app.mysql.insert('log', item)
  }
  async updateHash(item) {
    return await this.app.mysql.update('log', {
      hash: item.hash
    }, {
      where: {
        mail: item.mail
      }
    })
  }
  async getLog(mail) {
    const result = await this.app.mysql.get('log', {
      mail
    })
    return result ? result : this.ctx.throw(402, '无此用户信息')
  }
  async getHash(hash) {
    const result = await this.app.mysql.get('log', {
      hash
    })
    return result ? result : this.ctx.throw(402, '该地址已失效')
  }

}

module.exports = LogService;
