const { makeExecutableSchema } = require('graphql-tools')
const scrappers = require('./scrappers')

const typeDefs = `
  type Query { newsFeed: [NewsBySource] }

  type NewsBySource {
    source: String!
    news: [News]
  }

  type News {
    title: String!
    link: String!
    image: String!
    excerpt: String }
`

const resolvers = {
  Query: {
    newsFeed: () =>
      Promise.all([
        scrappers.ccn(),
        scrappers.coinTelegraph(),
        scrappers.coinDesk()
      ]).then(([ccn, coinTelegraph, coinDesk]) => [
        { source: 'ccn', news: ccn },
        { source: 'coinTelegraph', news: coinTelegraph },
        { source: 'coinDesk', news: coinDesk }
      ])
  }
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
