import { createPortal } from "react-dom";
import React, { useState } from "react";

function Layover(props) {
  return (
    <div
       className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      style={{ width: "100%", height: "100vh", overFlow: "hidden" }}
    >
      {props.children}
    </div>
    // document.getElementById('portal-root')
  );
}

function Modal(props) {
  return createPortal(
    <React.Fragment>
      <Layover>
        <div>
          <div>{props.children}</div>
          <button className="btn mt-10" onClick={props.onClose}>
            Close Modal
          </button>
        </div>
      </Layover>
    </React.Fragment>,
    document.getElementById("portal-root")
  );
}

export default Modal;
