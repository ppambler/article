const nav = require('./nav.config')
const themeConfig = {
  type: 'blog',
  authorAvatar: '/avatar.jpg',
  subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  logo: '/avatar.jpg',
  authorAvatar: '/avatar.jpg',
  search: true,
  searchMaxSuggestions: 10,
  sidebarDepth: 4,
  lastUpdated: '上次更新',
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    },
    socialLinks: [     // 信息栏展示社交信息
      { icon: 'reco-github', link: 'https://github.com/ppambler' }
    ],
  },
  nav,
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return (new Date(timestamp)).toUTCString()
          //或者用下面这段
          // const moment = require('moment')
          // moment.locale(lang)
          // return moment(timestamp).toLocaleString()
        }
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 18
      }
    ]
  ]
}

module.exports = themeConfig