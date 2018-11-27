'use strict';

const Service = require('egg').Service;
class RegIsterService extends Service {
  async insert(item) {
    try {
      const salt = this.ctx.helper.getRandomStr()
      return await this.app.mysql.insert('user', {
        mail: item.mail,
        password: this.ctx.helper.cryptPwd(item.password, salt),
        salt,
      })
    } catch (error) {
      this.ctx.throw(403, '邮箱已注册')
    }
  }
  async update(item) {
    try {
      const salt = this.ctx.helper.getRandomStr()
      return await this.app.mysql.update('user', {
        r_password: this.ctx.helper.cryptPwd(item.password, salt),
        r_salt: salt,
      }, {
        where: {
          mail: item.mail,
        }
      })
    } catch (error) {
      this.ctx.throw(400, error)
    }
  }
}

module.exports = RegIsterService;
