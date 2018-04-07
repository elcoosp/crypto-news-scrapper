import React from 'react'
import styled from 'styled-components'
const ErrorMessage = styled.p`
  border: 1px solid red;
`
export default ({ message }) => {
  return <ErrorMessage>Whooooops ! {message}</ErrorMessage>
}
