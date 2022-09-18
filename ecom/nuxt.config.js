import i18n from './config/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecom',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/elementUi.js', ssr: false },
    { src: '@/plugins/VMDeditor.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: 'lang',
          alwaysRedirect: true,
          cookieCrossOrigin: false,
          cookieSecure: true,
          onlyOnRoot: true // recommended
        },
        defaultLocale: 'en',
        seo: true,
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en'
          },
          {
            code: 'en-US',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'ms-MY',
            name: 'Bahasa Malaysia',
            iso: 'ms-MY'
          },
          {
            code: 'zh-CN',
            name: '中文-简体',
            iso: 'zh-CN'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 3000 // default: 3000
  },

  env: {
    frontendurl: 'http://localhost:3000',
    backendurl: 'http://localhost:5000'
  }
}
