'use strict';
const Service = require('egg').Service;
const nodemailer = require('nodemailer');
class MailService extends Service {
  async sendMail(code, to, hash) {
    const {
      user,
      pass,
      host
    } = this.app.config.mail;
    const transporter = nodemailer.createTransport({
      host,
      port: 465,
      secureConnection: true,
      auth: {
        user,
        pass
      },
    })
    // const template = `
    //   <h3>您好！<h3>
    //   您的 TrueGlobal 验证码是：<b>${code}</b>
    //   <p>此邮件由系统自动发出，30分钟内有效，请勿直接回复。</p>
    //   <p>感谢你的访问，祝你使用愉快!</p>

    // `
    const template = `
      <h3>您好！<h3>
      <p>感谢您在 TrueGlobal 的注册，请点击这里激活您的账号：</p>
      <p><a href="http://www.trueglobal.pro/#/active?hash=${hash}">http://www.trueglobal.pro/#/active?hash=${hash}</a></p>
      <p>此邮件由系统自动发出，24小时内有效，请勿直接回复。</p>
      <p>感谢你的访问，祝你使用愉快!</p>
    `
    const option = {
      from: `TrueGlobal <${user}>`,
      to,
      subject: '邮件验证',
      // 发送text或者html格式
      // text: 'Hello world', // text 格式
      html: template,
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