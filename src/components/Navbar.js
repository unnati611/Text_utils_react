import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  console.log(props);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg text-bg-${props.setdarktheme}`}>
        <div className={`container-fluid  text-bg-${props.setdarktheme}`}>
          <h2 className={`navbar-brand text-bg-${props.setdarktheme}`} href="#">
            {props.title}
          </h2>
          <button
            className={`navbar-toggler text-bg-${props.setdarktheme}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-bg-${props.setdarktheme}`}
                  aria-current="page"
                  to="/Text_utils_react"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-bg-${props.setdarktheme}`}
                  to="/Text_utils_react/about"
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-black"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={props.clickbtn}
                checked={props.modebtn}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable {props.modetext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "abc",
  aboutText: "abc",
};
