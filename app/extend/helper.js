'use strict';
const crypto = require('crypto');

const getRandomNum = (n = 6) => {
  return Math.random().toString().slice(2, n + 2);
};

const getRandomStr = (n = 6) => {
  return Math.random().toString(36).substr(12 - n);
};

const aesEncrypt = (data, key) => {
  const cipher = crypto.createCipher('aes192', key);
  let crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const aesDecrypt = (data, key) => {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const cryptPwd = (password, salt) => {
  const saltPassword = password + ':' + salt;
  const md5 = crypto.createHash('md5');
  return md5.update(saltPassword).digest('hex');
}

module.exports = {
  getRandomNum,
  aesEncrypt,
  aesDecrypt,
  cryptPwd,
  getRandomStr
};
