import http from './http'

const sendEmailUrl = '/sendMail'
const registerUrl = '/register'
const loginUrl = '/login'

// 获取验证码
const sendEmail = (params) => {
  return http.post(sendEmailUrl, params)
};

// 注册
// mail: 'string',
// password: 'string',
// authCode: 'string'
const register = (params) => {
  return http.post(registerUrl, params)
};

// mail: 'string',
// password: 'string',
const login = (params) => {
  return http.post(loginUrl, params)
};

export { sendEmail, register, login }
