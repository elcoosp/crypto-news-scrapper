import styled from 'styled-components'
import { T, gradientBg } from '../theme'

export default styled.span`
  padding: 0px ${T('spacing.small')};

  background-image: linear-gradient(
    to top left,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.4)
  );
  color: ${T('palette.black')};
  border-bottom: 1px solid transparent;
  transition: ${T('transition.medium')};

  :hover {
    border-bottom: 1px solid white;
    transition: ${T('transition.medium')};
  }
`
