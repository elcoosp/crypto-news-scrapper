const coinTelegraph = require('./index.js')
test('coinTelegraph scrapper should return an array of news object with title, link and image keys', () => {
  return coinTelegraph().then(data =>
    expect(data).toContainEqual(
      expect.objectContaining({
        title: expect.any(String),
        link: expect.stringContaining('https://cointelegraph.com'),
        image: expect.stringContaining('https://images.cointelegraph.com/'),
        excerpt: expect.any(String)
      })
    )
  )
})
