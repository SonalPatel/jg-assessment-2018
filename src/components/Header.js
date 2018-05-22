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

        <div className="flex-grid">
          <div className="col">
            <header>
              <div className="jg-logo-container">
                {
                  <a className="jg-logo" href="https://home.justgiving.com/">
                    <img
                      className="jg-logo"
                      src={jgLogo}
                      alt="JustGiving home"
                    />
                    <span className="off-screen">JustGiving Home</span>
                  </a>
                }
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
