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
          text: '网络',
          collapsible: true,
          children: [
            '/guide/network/tcp.md',
            // '/guide/network/xss.md',
            // '/guide/network/csrf.md',
            // '/guide/network/clickjacking.md'
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
          text: 'JS',
          collapsible: true,
          children: [
            '/guide/js/dataType.md',
            '/guide/js/optimization.md',
            '/guide/js/memoryLeak.md',
            '/guide/js/prototype.md',
            '/guide/js/eventLoop.md',
            '/guide/js/clone.md'
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
        {
          text: 'React',
          collapsible: true,
          children: [
            '/guide/react/hook.md',
            '/guide/react/components.md',
            // '/guide/css/box.md',
            // '/guide/css/BFC.md'
          ],
        },
        {
          text: 'ES6',
          collapsible: true,
          children: [
            '/guide/es6/promise.md',
            // '/guide/react/components.md',
            // '/guide/css/box.md',
            // '/guide/css/BFC.md'
          ],
        },
        {
          text: '项目相关',
          collapsible: true,
          children: [
            '/guide/project/ssr.md',
            // '/guide/react/components.md',
            // '/guide/css/box.md',
            // '/guide/css/BFC.md'
          ],
        },
      ],
      '/car': [
        {
          text: '学车',
          collapsible: true,
          children: [
            '/car/one.md',
            '/car/two.md',
            '/car/three.md',
            '/car/four.md'
          ],
        },
      ]
    }
  }),
}