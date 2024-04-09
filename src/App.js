import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [enablebtn, setenablebtn] = useState(true);
  const [mystyle, setmystyle] = useState("primary");
  const [modetext, setmodetext] = useState("dark");
  const [alert, setalert] = useState(null);

  const setAlertMessage = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const darkmodeon = () => {
    if (enablebtn === true) {
      setenablebtn(false);
      setmystyle("dark");
      setmodetext("light");
      document.body.style.backgroundColor = "gray";
      setAlertMessage(" Dark mode has been enabled !!", "Success!!");
    } else {
      setenablebtn(true);
      setAlertMessage("  Light mode has been enabled !!", "Success !!");
      setmystyle("primary");
      setmodetext("dark");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          modebtn={enablebtn}
          setdarktheme={mystyle}
          aboutText="About us"
          clickbtn={darkmodeon}
          modetext={modetext}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/Text_utils_react/about" element={<About />} />
            <Route
              path="/Text_utils_react"
              element={
                <Textform
                  heading="Enter the Text to analyze"
                  showalert={setAlertMessage}
                  setdarktheme={mystyle}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
