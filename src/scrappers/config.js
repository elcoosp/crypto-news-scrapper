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

module.exports = promiseScrap
