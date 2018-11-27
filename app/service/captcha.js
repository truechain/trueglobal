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
      hash: item.hash
    }, {
      where: {
        mail: item.mail
      }
    })
  }
  async update1(item) {
    return await this.app.mysql.update('user', {
      status: 1
    }, {
      where: {
        mail: item.mail
      }
    })
  }
  async updatePwd(item) {
    return await this.app.mysql.query(`
      UPDATE user SET
        password = r_password,
        salt = r_salt
      WHERE
        mail = ?
    `, [ item.mail ])
  }
  async find(mail) {
    const result = await this.app.mysql.get('log', {
      mail
    })
    return result ? result : this.ctx.throw(402, '无此用户信息')
  }
  async findHash(hash) {
    debugger
    const result = await this.app.mysql.get('log', {
      hash
    })
    console.log(result, 'result');

    return result ? result : this.ctx.throw(402, '该地址已失效')
  }
}

module.exports = RegIsterService;
