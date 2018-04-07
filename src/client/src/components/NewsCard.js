import React from 'react'
import styled from 'styled-components'
const NewsCard = styled.li``

export default ({ title, link, image, excerpt }) => (
  <NewsCard>
    <a href={link} target="_blank">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      {excerpt && <p>{excerpt}</p>}
    </a>
  </NewsCard>
)
