'use strict';
const Service = require('egg').Service;
const nodemailer = require('nodemailer');
const { activeTemplate } = require('../util');
class MailService extends Service {
  async sendMail(code, to, hash, type = '1') {
    const {
      user,
      pass,
      host
    } = this.app.config.mail;
    // debugger
    const titles = {
      '1': '账户激活',
      '2': '报名成功',
      '3': '密码重置',
    }
    const transporter = nodemailer.createTransport({
      host,
      port: 465,
      secureConnection: true,
      auth: {
        user,
        pass
      },
    })

    const option = {
      from: `TrueGlobal <${user}>`,
      to,
      subject: titles[type],
      html: activeTemplate(hash, type),
    };
    return await this.sendTrans(transporter, option);
  }

  async sendTrans(transporter, option) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(option, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info.messageId);
      });
    });
  }
}

module.exports = MailService;