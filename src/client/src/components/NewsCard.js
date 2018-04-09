import React from 'react'
import styled from 'styled-components'
import { T, gradientBg } from '../theme'
import StyledSpan from './StyledSpan'
const NewsCard = styled.li`
  list-style: none;
  overflow: hidden;

  margin: ${T('spacing.large')};
  min-width: 300px;
  max-width: 600px;
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: ${T('radius.medium')};
  box-shadow: ${T('shadow.small')};
  transition: ${T('transition.medium')};
  border: 1px solid ${T('palette.black')};

  :hover {
    border: 1px solid white;

    box-shadow: ${T('shadow.medium')};
    transition: ${T('transition.medium')};
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${T('palette.black')};
`

const Hero = styled.h2`
  margin: 0;
  height: 140px;
  ${gradientBg('palette.black')};
  color: white;
  padding: ${T('spacing.medium')};
  background-image: ${p => `url('${p.image}')`};
  background-position: center top;
  background-size: 100% auto;
  object-fit: cover;
`

const Excerpt = styled.p`
  padding: ${T('spacing.medium')};
`

export default ({ title, link, image, excerpt }) => (
  <NewsCard>
    <Anchor href={link} target="_blank">
      <Hero image={image}>
        <StyledSpan>{title}</StyledSpan>
      </Hero>
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
    </Anchor>
  </NewsCard>
)
