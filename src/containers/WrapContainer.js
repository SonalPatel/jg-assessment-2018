import React from "react";
import CharityInfo from "../components/CharityInfo.js";
import Donations from "../components/Donations.js";

class WrapContainer extends React.Component {
  render() {
    return (
      <div className="flex-grid-two-unequal">
        <div className="col-one">
          <CharityInfo />
        </div>

        <div className="col-two">
          <Donations />
        </div>
      </div>
    );
  }
}

export default WrapContainer;
