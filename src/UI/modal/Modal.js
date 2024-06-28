import { createPortal } from "react-dom";
import React from "react";

import { useNavigate } from "react-router-dom";


function Layover(props) {
  return (
    <div

      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
      style={{ width: "100%", height: "100vh", overFlow: "hidden" }}

      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
      onClick={props.onClose}

    >
      {props.children}
    </div>
  );
}


function Modal() {
  const navigate = useNavigate();

  const onModalClose = () => {
    navigate("/");

function Modal(props) {
  const stopPropagation = (e) => {
    e.stopPropagation();

  };

  return createPortal(
    <div onClick={props.onClose}>
      <Layover>

        <div className="mt-44">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onModalClose}
          >
            Close
          </button>
        </div>
      </Layover>
    </React.Fragment>,
    document.getElementById("portal-root"),

        <div onClick={stopPropagation}>
          <div>{props.children}</div>
        </div>
      </Layover>
    </div>,
    document.getElementById("portal-root")

  );
}

export default Modal;
