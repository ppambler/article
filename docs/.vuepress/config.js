const themeConfig = require('./theme.config')
module.exports = {
  theme: 'reco',
  title: "每日一篇",
  description: '不积跬步，无以至千里；不积小流，无以成江海',
  markdown: {
    lineNumbers: true,
  },
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  themeConfig,

}  