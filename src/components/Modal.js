import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'

const animateSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const animateSlideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`

const spinEmoji = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`

const ModalStyled = styled.div`
  width: 60%;
  height: 80%;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  margin: 5rem auto;
  animation: ${props => props.showModal ? animateSlideIn : animateSlideOut} 350ms ease forwards;
  box-shadow: 0 3px 6px rgb(0, 0, 0, 0.2);

  // seleciona todos os elementos p em que o elemento pai é o ModalStyled
  & p {
    margin-top: 2rem;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    line-height: 1.3;
  }

  & span {
      animation: ${spinEmoji} 1300ms linear infinite;
      font-size: 2rem;
    }
`

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 2rem;
`

const Modal = ({ mountModal, showModal, handleCloseModal }) => {
  return (
    <Fragment>
      {mountModal && (
        <ModalStyled showModal={showModal}>
          <ContentWrapper>
            <ButtonContainer>
              <Button
                onClick={handleCloseModal}>
                fechar modal
              </Button>
            </ButtonContainer>
            <p>Modal legal aparecendo!</p>
            <span>😊</span>
            
            <p style={{ fontSize: '1.2rem', maxWidth: '40rem' }}>
              Esse modal foi feito apenas em CSS através de keyframes com styled-components alternados dinamicamente com  variáveis de estado.
            </p>
          </ContentWrapper>
        </ModalStyled>
      )}
    </Fragment>
  )
}

export default Modal
