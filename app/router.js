'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api', controller.home.index);
  // router.get('/captcha', controller.captcha.index);
  router.post('/api/sendMail', controller.captcha.smsCaptcha);
  router.post('/api/register', controller.register.index);
  router.post('/api/login', controller.login.index);
  router.post('/api/team', controller.team.index);
  router.get('/api/active', controller.check.index);
};
