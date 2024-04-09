import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("ENTER TEXT HERE");
  const [fontColor, setFontColor] = useState("black");
  const handleUpeercaseClick = () => {
    // console.log("uppercaseclicked");
    setText(text.toUpperCase());
    props.showalert("convert into Uppercase!!", "success!!");
  };
  const handleLowecaseClick = () => {
    // console.log("uppercaseclicked");
    setText(text.toLowerCase());
    props.showalert("convert into lowercase!!", "success!!");
  };
  const handleCapitalizeClick = () => {
    console.log(text);
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    console.log(text.charAt(0).toUpperCase() + text.slice(1));
    props.showalert("convert into Capitalize!! ", "success!!");
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("text copied");
  };
  const handleExtraspaces = (event) => {
    // console.log("onchnge click");
    setText(text.replace(/ {1,}/g, " ").trim());
    props.showalert("Extra Spaces Removed!! ", "success!!");
  };
  const handleOnchange = (event) => {
    // console.log("onchnge click");
    setText(event.target.value);
  };
  const changeFontcolor = (ev) => {
    setFontColor(ev.target.value);
  };

  return (
    <>
      <div className={`container p-3 rounded text-bg-${props.setdarktheme}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3 mt-3">
          <textarea
            className={`form-control `}
            value={text}
            style={{ color: fontColor }}
            onChange={handleOnchange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleUpeercaseClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleLowecaseClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleCapitalizeClick}
          >
            Convert to Capitalize
          </button>
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            onClick={handleExtraspaces}
          >
            Remove Extra Spaces
          </button>
          <select
            className={`btn my-1  mx-1 btn-${props.setdarktheme} `}
            value={fontColor}
            onChange={changeFontcolor}
          >
            Change Text Color
            <option value="black">Select text color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
          </select>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read thee text</p>
        <h3>Preview</h3>
        <p style={{ color: fontColor }}>{text}</p>
      </div>
    </>
  );
}
