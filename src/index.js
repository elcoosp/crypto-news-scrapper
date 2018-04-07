const express = require('express'),
  bodyParser = require('body-parser'),
  { graphqlExpress, graphiqlExpress } = require('apollo-server-express'),
  schema = require('./schema'),
  cors = require('cors'),
  app = express()

app
  .use(cors())
  .use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  .listen(3000, () => console.log('GRAPHIQL : http://localhost:3000/graphiql'))
