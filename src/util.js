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
