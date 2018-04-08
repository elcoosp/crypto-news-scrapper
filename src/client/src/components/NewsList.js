import React from 'react'
import styled from 'styled-components'
import NewsCard from './NewsCard'
import { T, gradientBg } from '../theme'

const NewsList = styled.section`
  ${gradientBg('palette.yellow')};
`

const SourceTitle = styled.h1`
  margin: 0;
  color: ${T('palette.black')};
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`
export default ({ source, news }) => {
  return (
    <NewsList>
      <SourceTitle>{source}</SourceTitle>
      <List>{news.map(n => <NewsCard {...n} key={n.link} />)}</List>
    </NewsList>
  )
}
