import React from "react";
import jgLogo from "../g-logo-small.png";
import "../styles/App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <span className="off-screen">Skip Links</span>
        <ul className="off-screen">
          <li>
            <a className="skip-link" href="#content">
              Skip to main content
            </a>
          </li>
          <li>
            <a className="skip-link" href="#latest-donations">
              Skip to latest donations
            </a>
          </li>
          <li>
            <a className="skip-link" href="#footer-content">
              Skip to footer
            </a>
          </li>
        </ul>

        <p className="testing-sass"> The header goes here</p>
      </div>
    );
  }
}

export default Header;
