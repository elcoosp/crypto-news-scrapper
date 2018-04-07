import React from 'react'
import styled from 'styled-components'
const Loader = styled.div``

export default ({ loadingWhat }) => {
  return <Loader>Loading {loadingWhat}</Loader>
}
