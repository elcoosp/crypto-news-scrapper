const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const scrappers = require('./scrappers')
console.log(scrappers)

const typeDefs = `
  type Query { newsFeed: [NewsBySource] }

  type NewsBySource {
    source: String
    news: [News]
  }

  type News { title: String
    link: String
    image: String
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app
  .use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  .listen(3000, () =>
    console.log('Go to http://localhost:3000/graphiql to run queries!')
  )
