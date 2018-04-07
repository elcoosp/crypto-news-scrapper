import React from 'react'
import styled from 'styled-components'
import { T } from '../theme'
const NewsCard = styled.li``

const Anchor = styled.a`
  text-decoration: none;
  color: ${T('palette.main')};
`
export default ({ title, link, image, excerpt }) => (
  <NewsCard>
    <Anchor href={link} target="_blank">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      {excerpt && <p>{excerpt}</p>}
    </Anchor>
  </NewsCard>
)
