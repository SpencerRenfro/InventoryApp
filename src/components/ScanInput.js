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
        <button onClick={props.handleSubmit}>Submit</button>
      </form>
      <div className="display-text">
        {props.isplayText && <p>You entered: {props.displayText}</p>}
        <div>input text: {props.inputText}</div>
      </div>
    </div>
  );
}

export default ScanInput;
