import React from 'react'
import styled from 'styled-components'
import NewsCard from './NewsCard'
const NewsListBySource = styled.section``

export default ({ source, news }) => {
  return (
    <NewsListBySource>
      <h1>{source}</h1>
      <ul>{news.map(n => <NewsCard {...n} key={n.link} />)}</ul>
    </NewsListBySource>
  )
}
