'use strict';

const Service = require('egg').Service;
class TeamService extends Service {
  async create(item) {
    return await this.app.mysql.insert('team', {
      ...item,
      mail: this.ctx.decode.mail
    })
  }
}

module.exports = TeamService;
