'use strict';
const jwt = require('jwt-simple');
module.exports = (options, app) => {
  return async function(ctx, next) {
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJtb2JpbGUiOiIxNTEwMTY2MTM4MCIsImNyZWF0ZVRpbWUiOjE1MzQ5MjI3NzMwNTZ9.800NC-TyfVrOYv1gYjooM0gHpgQK-6Ik1uzttxhKdDk
    const whitePaths = [
      '/api/',
      '/api/captcha',
      '/api/sendMail',
      '/api/register',
      '/api/login',
      '/api/reset',
      '/api/active',
    ];
    // ctx.logger.info(ctx.URL.pathname , '====');
    if (!whitePaths.includes(ctx.URL.pathname)) {
      if (!ctx.request.header.token) {
        ctx.throw(401, '请传入token');
      }
      try {
        const decode = jwt.decode(ctx.request.header.token, app.config.secret);
        // token 有效期5天
        const expiredS = 60 * 60 * 24 * 5;
        // debugger
        // const expiredS = 60;
        if ((+new Date() - decode.createTime) / 1000 <= expiredS) {
          ctx.decode = decode;
        } else {
          ctx.throw(401, 'token已过期');
        }
      } catch (error) {
        ctx.throw(401, 'token解析错误');
      }
    }
    await next();
  };
};
