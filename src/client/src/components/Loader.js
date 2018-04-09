import React from 'react'
import styled, { keyframes } from 'styled-components'
import { gradientBg, fadeIn } from '../theme'

const loaderAnimation = keyframes`
0%{
  border-radius: 5px;
}
50%{
  border-radius: 50%;
  transform: scale(.5)
}
100%{
  border-radius: 5px;
}
`
const Animation = styled.div`
  ${gradientBg('palette.yellow')};
  height: 100px;
  width: 100px;
  animation: ${loaderAnimation} 3s infinite;
`
const Loader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: ${fadeIn} 0.3s ease-in-out;
`
export default ({ loadingWhat }) => (
  <Loader>
    <p>Loading {loadingWhat}</p>
    <Animation />
  </Loader>
)
