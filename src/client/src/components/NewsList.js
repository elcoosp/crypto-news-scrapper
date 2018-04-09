import React from 'react'
import styled from 'styled-components'
import NewsCard from './NewsCard'
import { T, gradientBg, fadeIn } from '../theme'
import StyledSpan from './StyledSpan'

const NewsList = styled.section`
  ${gradientBg('palette.yellow')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SourceTitle = styled.h1`
  margin: ${T('spacing.medium')};

  font-size: 3rem;
  color: ${T('palette.black')};
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  animation: ${fadeIn} 0.3s;
`
export default ({ source, news }) => {
  return (
    <NewsList>
      <SourceTitle>
        <StyledSpan>{source}</StyledSpan>
      </SourceTitle>
      <List>{news.map(n => <NewsCard {...n} key={n.link} />)}</List>
    </NewsList>
  )
}
