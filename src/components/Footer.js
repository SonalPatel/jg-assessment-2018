import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="flex-grid mt">
        <div className="col">
          <footer id="footer-content" role="contentinfo">
            <p>
              Visit JustGiving to{" "}
              <a
                className="animate-link"
                href="https://www.justgiving.com/fundraising"
              >
                start fundraising for a charity
              </a>{" "}
              or{" "}
              <a
                className="animate-link"
                href="https://www.justgiving.com/crowdfunding"
              >
                start crowdfunding for cause you believe in
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
