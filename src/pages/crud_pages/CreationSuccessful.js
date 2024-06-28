import React, { useState } from "react";
import Modal from "../../ui/modal/Modal";

export default function CreationSuccessful(props) {
  const [showModal, setShowModal] = useState(true);
  const modalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal}
      <Modal onClose={modalHandler} content={props.childen} />
    </div>
  );
}
