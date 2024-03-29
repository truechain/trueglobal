import axios from 'axios'
import {
  serverUrl
} from '../config'
import Vue from 'vue'
import { getStore, removeStore } from '@/util'
const service = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
const that = Vue.prototype
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = getStore('token')
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  ({
    response = {}
  }) => {
    const {
      data = {}, status
    } = response

    if (status === 401) {
      removeStore('token')
      that.$Message.warning({
        content: '登录信息以过期, 请重新登录',
        duration: 3
      })
      setTimeout(() => {
        window.location.href = `/`
      }, 2000)
    } else {
      that.$Message.error(data.message)
    }

    /* eslint-disable */
    return Promise.reject({
      status: status,
      message: data.message,
    })
  }
)

export default {
  get (url, params) {
    return service({
      method: 'get',
      url,
      params
    })
  },
  post (url, data) {
    return service({
      method: 'post',
      url,
      data
    })
  }
}
