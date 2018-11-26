import http from './http'

// const getToken = () => {
//   return storage.load({
//     key: 'token'
//   })
// };

const getToken = () => {
  var name = 'token='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}

// 获取验证码
const sendEmail = (params) => {
  return http.post('/sendMail', params)
}

// 注册
// mail: 'string',
// password: 'string',
// authCode: 'string'
const register = (params) => {
  return http.post('/register', params)
}

// mail: 'string',
// password: 'string',
const login = (params) => {
  return http.post('/login', params)
}
const active = (params) => {
  return http.get('/active', params)
}

// name
// leader
// phone
const signIn = async (params) => {
  let res = await getToken()
  const headers = {
    token: res
  }
  return http.post('/team', params, headers)
}

// 找回密码
const forgetPwd = (params) => {
  return http.post('/register', params)
}

export {
  sendEmail,
  register,
  login,
  signIn,
  active,
  forgetPwd
}
