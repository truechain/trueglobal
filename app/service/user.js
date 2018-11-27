'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async get(mail) {
    const result = await this.app.mysql.get('user', {
      mail
    })
    return result ? result : this.ctx.throw(402, '该账户未注册')
  }
  async updateStatus(item) {
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

  async add(item) {
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
        password: this.ctx.helper.cryptPwd(item.password, salt),
        salt,
      }, {
        where: {
          mail: item.mail,
        }
      })
    } catch (error) {
      this.ctx.throw(400, error)
    }
  }
  async updateResetPwd(item) {
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

module.exports = UserService;
