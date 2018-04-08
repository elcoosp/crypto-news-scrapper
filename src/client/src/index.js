import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import styledNormalize from 'styled-normalize'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './theme'
import App from './App'

injectGlobal`
${styledNormalize}
:root {
  font-family: 'Exo', sans-serif;
}
`
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
