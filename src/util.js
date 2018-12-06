/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const pagestar = context => {
  const existEl = document.getElementById('page_stat')
  if (existEl) {
    document.body.removeChild(existEl)
  }
  const scriptEl = document.createElement('script')
  scriptEl.type = 'text/javascript'
  scriptEl.id = 'page_stat'
  scriptEl.src = '//s19.cnzz.com/z_stat.php?id=1274893188&web_id=1274893188'
  document.body.appendChild(scriptEl)
}

function addZero (i) {
  return i < 10 ? `0${i}` : i
}

export const getTime = (time, form) => {
  const date = new Date(time)
  const Y = date.getFullYear() + '-'
  const M = addZero(date.getMonth() + 1) + '-'
  const D = addZero(date.getDate()) + ' '
  const h = addZero(date.getHours()) + ':'
  const m = addZero(date.getMinutes()) + ':'
  const s = addZero(date.getSeconds())
  if (form) {
    return Y + M + D
  } else {
    return Y + M + D + h + m + s
  }
}
