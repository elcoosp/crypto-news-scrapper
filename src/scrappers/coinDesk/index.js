// const promiseScrap = require('../config')
const Xray = require('x-ray')

const x = Xray({
  filters: {
    trim: d => d.trim(),
    getfirstImage: d => d.split(' 1x')[0]
  }
})

const promiseScrap = (url, scope, selector) =>
  new Promise((resolve, reject) =>
    x(url, scope, selector)((e, data) => (e ? reject(e) : resolve(data)))
  )

const coinDesk = () =>
  promiseScrap('https://www.coindesk.com/', '.article.medium', [
    {
      title: '.post-info > h3',
      link: '.post-info > h3 > a@href',
      image: '.picture > a > img@data-lazy-src',
      excerpt: '.post-info > p:not(.timeauthor)'
    }
  ])
module.exports = coinDesk
