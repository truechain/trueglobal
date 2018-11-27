'use strict';

const Service = require('egg').Service;
const jwt = require('jwt-simple');
class LoginServer extends Service {
  async getToken({ mail, password }) {
    const {
      ctx,
      app
    } = this;
    // const expired = 60 * 5;
    // const expiredMail = 60 * 30;
    const res = await this.service.user.get(mail);
    if(res.status === 0) {
      ctx.throw(403, '账户未激活')
    }
    // debugger
    if (this.ctx.helper.cryptPwd(password, res.salt) !== res.password) {
      ctx.throw(403, '账户或密码错误');
    }

    const token = jwt.encode({
      mail,
      uid: res.uid,
      createTime: +new Date(),
    }, app.config.secret);

    return token;
  }
}

module.exports = LoginServer;