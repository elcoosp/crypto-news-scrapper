const ccn = require('./index.js')
test('coinDesk scrapper should return an array of news object with title, link, excerpt and image keys', () => {
  return ccn().then(data =>
    expect(data).toContainEqual(
      expect.objectContaining({
        title: expect.any(String),
        link: expect.stringContaining('https://www.coindesk.com/'),
        image: expect.stringContaining('https://media.coindesk.com/uploads/')
      })
    )
  )
})
