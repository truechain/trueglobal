import axios from 'axios'
import { serverUrl } from '../config'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  () => {
    // return Promise.reject(err)
    // 响应异常处理
  }
)

axios.defaults.baseURL = serverUrl
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param || null
      }).then((res) => {
        resolve(res)
      })
    })
  },
  post (url, param, headers) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: headers || null,
        url,
        data: param || null
      }).then((res) => {
        resolve(res)
      })
    })
  }
}
