module.exports = {
  // setting the currents page html header params
  head: {
    titleTemplate: 'Vue Game - %s', // the title of the site, %s is the placeholder for the current page's title
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  build: {
    extractCSS: true // extract all inline CSS to external css files
  },


  plugins: [
    { src: '~/plugins/phaser', ssr: false } // load phaser into our site
  ]

}