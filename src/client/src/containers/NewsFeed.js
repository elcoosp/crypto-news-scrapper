import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ErrorMessage, Loader, NewsList } from '../components'

const GET_NEWS_FFED = gql`
  {
    newsFeed {
      source
      news {
        title
        link
        image
        excerpt
      }
    }
  }
`

export default () => (
  <main>
    <Query query={GET_NEWS_FFED}>
      {({ loading, error, data }) =>
        error ? (
          <ErrorMessage message="Could not retrieve news feed" />
        ) : loading ? (
          <Loader loadingWhat="news feed" />
        ) : data ? (
          data.newsFeed.map(list => <NewsList key={list.source} {...list} />)
        ) : null
      }
    </Query>
  </main>
)
