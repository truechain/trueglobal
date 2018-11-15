'use strict';

const Service = require('egg').Service;
class TeamService extends Service {
  async create(item) {
    const { mail, uid } = this.ctx.decode;
    try {
      return await this.app.mysql.insert('team', {
        ...item,
        mail,
        uid
      })
    } catch (error) {
      this.ctx.throw(402, '不可重复提交')
    }

  }
}

module.exports = TeamService;
