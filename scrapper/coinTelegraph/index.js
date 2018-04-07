const Xray = require('x-ray')
const x = Xray({
  filters: {
    getfirstImage: data => data.split(' 1x')[0]
  }
})

const coinTelegraph = () =>
  new Promise((resolve, reject) =>
    x('https://cointelegraph.com/', '.post', [
      {
        title: '.postTitle',
        link: 'a@href',
        image: '.image>a>img.thumb@srcset | getfirstImage'
      }
    ])((e, data) => (e ? reject(e) : resolve(data)))
  )

module.exports = coinTelegraph
