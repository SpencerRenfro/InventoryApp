import React, { useState } from "react";

function ScanInput(props) {
//   const [inputText, setInputText] = useState("");
//   const [displayText, setDisplayText] = useState("");

//   const handleChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setDisplayText(inputText);
//     setInputText("");
//   };
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.inputText}
          onChange={props.handleChange}
          placeholder="Enter text"
        />
        <button className="btn mx-5 bg-slate-900 text-white" onClick={props.handleSubmit}>Search</button>
      </form>
      <div className="display-text">
        {props.isplayText && <p>You entered: {props.displayText}</p>}
      </div>
    </div>
  );
}

export default ScanInput;
