const ccn = require('./index.js')
test('ccn scrapper should return an array of news object with title, link and image keys', () => {
  return ccn().then(data =>
    expect(data).toContainEqual(
      expect.objectContaining({
        title: expect.any(String),
        link: expect.stringContaining('https://www.ccn.com/'),
        image: expect.stringContaining('wp-content/uploads')
      })
    )
  )
})
