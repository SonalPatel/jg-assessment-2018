import React from "react";
import Charityinfo from "../components/CharityInfo.js";
import Donations from "../components/Donations.js";

class WrapContainer extends React.Component {
  render() {
    return (
      <div className="x">
        <div className="y">
          MyComponent for charity (oxfam: 13441) info goeshere
        </div>

        <div className="z">MyComponent for donations goes here</div>
      </div>
    );
  }
}

export default WrapContainer;
