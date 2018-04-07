const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

// Some fake data
const newsFeed = [
  { title: 'Plouf', url: 'http://somesuper.url' },
  { title: 'Abracadabra', url: 'http://some.url' }
]

const typeDefs = `
  type Query { newsFeed: [News] }
  type News { title: String, url: String }
`

const resolvers = {
  Query: { newsFeed: () => newsFeed }
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
