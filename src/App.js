import React, { Fragment, useState } from 'react'
import Modal from './components/Modal'
import Button from './components/Button'
import { GlobalStyles } from './global-styles/GlobalStyles'

const App = () => {
  const [mountModal, setMountModal] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setMountModal(true)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setTimeout(() => setMountModal(false), 350)
    setShowModal(false)
  }

  return (
    <Fragment>
      <GlobalStyles />
      <div className="center-app">
        <Button
          onClick={handleOpenModal}
        >
          abrir modal
      </Button>
        <Modal
          mountModal={mountModal}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </Fragment>
  )
}

export default App
