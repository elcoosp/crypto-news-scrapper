import { path } from 'ramda'
import { css } from 'styled-components'
import { adjustHue } from 'polished'

export const T = stringPath => path(['theme', ...stringPath.split('.')])

export const gradientBg = color => css`
  background-image: linear-gradient(
    to top left,
    ${T(color)},
    ${p => adjustHue(20)(T(color)(p))}
  );
`

const palette = {
  black: '#2c3e50',
  yellow: '#f39c12',
  green: '#27ae60'
}

const spacing = {
  small: '5px',
  medium: '10px',
  large: '20px'
}

const radius = {
  small: '5px',
  medium: '10px',
  large: '20px'
}
const shadow = {
  small: '2px 2px 10px rgba(0,0,0, 0.2)',
  medium: '2px 2px 10px rgba(0,0,0, 0.3)',
  large: '2px 2px 10px rgba(0,0,0, 0.4)'
}

const transition = {
  slow: 'all 0.5s ease-in-out',
  medium: 'all 0.4s ease-in-out',
  speed: 'all 0.3s ease-in-out'
}

export default {
  palette,
  spacing,
  radius,
  shadow,
  transition
}
