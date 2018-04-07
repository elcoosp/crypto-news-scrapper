import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import App from './App'

injectGlobal`
${styledNormalize}
:root {
  font-family: 'Source Sans Pro', sans-serif;
}
`
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
