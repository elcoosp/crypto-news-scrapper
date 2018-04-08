import React from 'react'
import styled from 'styled-components'
import { T, gradientBg } from '../theme'
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

  :hover {
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
  height: 120px;
  ${gradientBg('palette.black')};
  color: white;
  padding: ${T('spacing.medium')};
  background-image: ${p => `url('${p.image}')`};
  background-position: center top;
  background-size: 100% auto;
  object-fit: cover;
`

const Title = styled.span`
  padding: 0px ${T('spacing.small')};

  background-image: linear-gradient(
    to top left,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  color: ${T('palette.black')};
  border-bottom: 1px solid transparent;
  transition: ${T('transition.medium')};

  :hover {
    border-bottom: 1px solid white;
    transition: ${T('transition.medium')};
  }
`

const Excerpt = styled.p`
  padding: ${T('spacing.small')};
`

export default ({ title, link, image, excerpt }) => (
  <NewsCard>
    <Anchor href={link} target="_blank">
      <Hero image={image}>
        <Title>{title}</Title>
      </Hero>
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
    </Anchor>
  </NewsCard>
)
