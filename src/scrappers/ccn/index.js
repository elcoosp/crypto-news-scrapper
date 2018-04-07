const promiseScrap = require('../config')

const ccn = () =>
  promiseScrap('https://www.ccn.com/', '.post', [
    {
      title: '.entry-title',
      link: '.entry-title > a@href',
      image: '.post-thumbnail > a > img@src'
    }
  ])

module.exports = ccn
