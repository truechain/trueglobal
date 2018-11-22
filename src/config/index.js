/**
 * 配置编译环境和线上环境之间的切换
 *
 * serverUrl: 域名地址
 * test
 */

let serverUrl

switch (process.env.NODE_ENV) {
  case 'development':
    serverUrl = 'http://127.0.0.1:7001/api'
    // serverUrl = 'http://47.91.233.146:7001/'
    break
  case 'production':
    // serverUrl = 'http://47.91.233.146:7001/'
    serverUrl = '//www.trueglobal.pro/api'
    break
}

export {
  serverUrl
}
