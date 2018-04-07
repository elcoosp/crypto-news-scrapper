const Xray = require('x-ray')
const moment = require('moment')

const x = Xray({
  filters: {
    trim: d => d.trim(),
    getfirstImage: d => d.split(' 1x')[0]
  }
})

const coinTelegraph = () =>
  new Promise((resolve, reject) =>
    x('https://cointelegraph.com/', '.post', [
      {
        title: '.postTitle',
        link: 'a@href',
        image: '.image > a > img.thumb@srcset | getfirstImage',
        excerpt: '.image > a > p.lead | trim'
      }
    ])((e, data) => (e ? reject(e) : resolve(data)))
  )

module.exports = coinTelegraph
