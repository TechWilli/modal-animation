import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: .65rem;
  width: 10rem;
  cursor: pointer;
  background-color: #f9c74f;
  border: 2px solid #ffb703;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.15);
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  border-radius: 6px;
  transition: 200ms ease-in;
  font-size: 1rem;

  &:hover {
    background-color: #ffb703;
  }
`

const Button = ({ children, onClick }) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
