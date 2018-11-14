'use strict';

const Service = require('egg').Service;
const jwt = require('jwt-simple');
class LoginServer extends Service {
  async find(mail) {
    const result = await this.app.mysql.get('user', {
      mail
    })
    return result ? result : this.ctx.throw(402, '该账户未注册')
  }
  async check({ mail, password }) {
    const {
      ctx,
      app
    } = this;
    // const expired = 60 * 5;
    // const expiredMail = 60 * 30;
    const res = await this.find(mail);
    // debugger
    if (this.ctx.helper.cryptPwd(password, res.salt) !== res.password) {
      ctx.throw(403, '账户或密码错误');
    }

    const token = jwt.encode({
      mail,
      createTime: +new Date(),
    }, app.config.secret);

    return token;
  }
}

module.exports = LoginServer;