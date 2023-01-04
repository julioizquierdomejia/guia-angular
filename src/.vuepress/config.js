const { description } = require('../../package')

module.exports = {

    dest: 'docs',
    base: 'guia-angular',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Guia Angular',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Clase a clase de angular - @julioIzquierdoMejia',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],


  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Angular gh-pages',
        link: '/angular-gh-pages/',
      },
      
    ],
    sidebar: [
      
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
