import React from "react";

import { useNavigate } from "react-router-dom";

export default function Modal(props) {
  const navigate = useNavigate();

  const onModalClose = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {props.children}
      <button
        type="button"
        className="btn btn-accent text-xl text-center"
        onClick={onModalClose}
      >
        Close
      </button>
    </div>
  );
}
