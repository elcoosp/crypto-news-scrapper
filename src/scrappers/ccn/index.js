const promiseScrap = require('../config')

const ccn = () =>
  promiseScrap('https://www.ccn.com/', '.posts-row > .post', [
    {
      title: '.entry-title',
      link: '.entry-title > a@href',
      image: '.post-thumbnail > a > img@src'
    }
  ])

module.exports = ccn
