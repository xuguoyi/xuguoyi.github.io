const path = require("path");
const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  lang: 'zh-CN',
  title: 'Hello, World！',
  description: '这是我的前端学习记录!',
  base: '/',
  open: true,
  // head: [
  //     ['link', {
  //         rel: 'icon',
  //         href: `/logo.png`
  //     }]
  // ],
  // 如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。
  evergreen: true,
  alias: {
    '@assets': path.resolve(__dirname, './assets'),
  },
  theme: defaultTheme({
    logo: "/logo.png",
    logoDark: "/logo-dark.png",
    editLink: true,
    editLinkText: "编辑此页",
    repo: '9kg/blog',
    repoLabel: "访问Github",
    docsBranch: 'master',
    docsDir: 'docs',
    notFound: ['当前路径不存在~'],
    lastUpdatedText: "最近更新",
    contributors: false,
    backToHome: '返回首页',
    openInNewWindow: '新窗口打开',
    toggleDarkMode: '昼夜交替',
    toggleSidebar: '切换侧边栏',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    sidebar: {
      '/guide/': [
        {
          text: '安全',
          collapsible: true,
          children: [
            '/guide/safe',
            '/guide/safe/xss.md',
            '/guide/safe/csrf.md',
            '/guide/safe/clickjacking.md'
          ],
        },
        {
          text: '算法',
          collapsible: true,
          children: [
            '/guide/arithmetic/complexity.md',
            '/guide/arithmetic/dataStructures.md',
            '/guide/clickjacking.md'
          ],
        },
        {
          text: 'CSS',
          collapsible: true,
          children: [
            '/guide/css/flex.md',
            '/guide/css/position.md',
            '/guide/css/box.md',
            '/guide/css/BFC.md'
          ],
        },
      ]
    }
  }),
}