import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getStore } from '@/util'

import en from './lib/en.json'
import zh from './lib/zh.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getStore('lang') || 'zh',
  messages: {
    en,
    zh
  }
})

export default i18n
