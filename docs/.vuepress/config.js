module.exports = {
  title: 'THIS IS TITLE',
  description: 'Just playing around',
  port: '3000',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '测试', link: '/pages/guide/' },
      { text: '关于我们', link: '/pages/about/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: '语言',
        ariaLabel: 'Language',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: '日本語', link: '/language/japanese/' }
        ]
      }
    ]
  }
}