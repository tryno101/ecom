import en from '../locales/en-US.json'
import ms from '../locales/ms-MY.json'
import zh from '../locales/zh-CN.json'

export default {

  locale: /* getLanguae(), */'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: { en, ms, zh }

}
