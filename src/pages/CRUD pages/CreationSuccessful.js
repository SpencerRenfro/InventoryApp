import React, { useState } from 'react'
import Modal from '../../UI/modal/Modal'

function CreationSuccessful(props) {
    const [showModal, setShowModal] = useState(true);
    const modalHandler = () => {
        setShowModal(false);
    }

  return (
    <div>
    {showModal}
        <Modal onClose={modalHandler} content={props.childen} />
    </div>
  )
}

export default CreationSuccessful