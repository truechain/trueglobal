import http from './http'
import axios from 'axios'
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

const resetPwd = (params) => {
  return http.post('/reset', params)
}

const apiArticleList = (params = {}) => {
  return axios({
    method: 'get',
    url: 'http://39.105.125.189:8001/api2/articleList',
    params,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjoiMHgzNDQ5ZWQzMDFlOGUyNzJmMmQzNzc0YzRiNjZhYTIzMDBmYmE5NmM4IiwibW9iaWxlIjoiMTc2MTEyMjM2NjUifQ.wfLydygUL2HcOctfRCTOfIwuJHZc5QEC0HHSm9WR-NE'
    }
  })
}
const apiArticleDetail = (params = {}) => {
  return axios({
    method: 'get',
    url: 'http://39.105.125.189:8001/api2/articleDetail',
    params,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjoiMHgzNDQ5ZWQzMDFlOGUyNzJmMmQzNzc0YzRiNjZhYTIzMDBmYmE5NmM4IiwibW9iaWxlIjoiMTc2MTEyMjM2NjUifQ.wfLydygUL2HcOctfRCTOfIwuJHZc5QEC0HHSm9WR-NE'
    }
  })
}

export {
  sendEmail,
  register,
  login,
  signIn,
  active,
  forgetPwd,
  resetPwd,
  apiArticleList,
  apiArticleDetail
}
