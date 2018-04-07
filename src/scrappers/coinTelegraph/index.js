const Xray = require('x-ray')
const promiseScrap = require('../config')

const coinTelegraph = () =>
  promiseScrap('https://cointelegraph.com/', '.post', [
    {
      title: '.postTitle',
      link: 'a@href',
      image: '.image > a > img.thumb@srcset | getfirstImage',
      excerpt: '.image > a > p.lead | trim'
    }
  ])

module.exports = coinTelegraph
