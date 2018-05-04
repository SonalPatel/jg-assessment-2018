import React from "react";
import Charityinfo from "../components/CharityInfo.js";
import Donations from "../components/Donations.js";

class WrapContainer extends React.Component {
  render() {
    return (
      <div className="x">
        <div className="y">MyComponent 1 goes here</div>

        <div className="z">MyComponent 2 goes here</div>
      </div>
    );
  }
}

export default WrapContainer;
