import { createPortal } from "react-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

function Layover(props) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
      style={{ width: "100%", height: "100vh", overFlow: "hidden" }}
    >
      {props.children}
    </div>
    // document.getElementById('portal-root')
  );
}

function Modal() {
  const navigate = useNavigate();

  const onModalClose = () => {
    navigate("/");
  };

  return createPortal(
    <React.Fragment>
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
  );
}

export default Modal;
