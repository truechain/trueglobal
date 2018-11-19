'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/captcha', controller.captcha.index);
  router.post('/sendMail', controller.captcha.smsCaptcha);
  router.post('/register', controller.register.index);
  router.post('/login', controller.login.index);
  router.post('/team', controller.team.index);
  router.get('/active', controller.check.index);
};
