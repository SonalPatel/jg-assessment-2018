import React from "react";
import CharityInfo from "../components/CharityInfo.js";
import Donations from "../components/Donations.js";

class WrapContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="brand-banner">
          <CharityInfo />
        </div>

        <div className="flex-grid">
          <Donations />
        </div>
      </div>
    );
  }
}

export default WrapContainer;
