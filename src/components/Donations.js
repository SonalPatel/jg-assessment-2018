import React from "react";

class Donations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: []
    };
  }

  componentDidMount() {
    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441/donations", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            content: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, content } = this.state;

    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return (
        <div className="brand-primary">
          <p>Loading latest donation details...</p>
          <div className="lds-circle" />
        </div>
      );
    } else {
      return (
        <div className="donations-wrapper" id="latest-donations">
          <h2>
            {" "}
            <span className=" brand-primary">
              <span className="fas fa-hand-holding-heart" aria-hidden="true" />
            </span>{" "}
            Latest donations
          </h2>
          <ul>
            {content.donations.map(donation => (
              <li className="layered-paper" key={donation.name}>
                <div className="flex-grid-two-unequal-small">
                  <div className="col-one-small">
                    <h3>{donation.donorDisplayName}</h3>
                  </div>

                  <div className="col-two-small">
                    <span className="avatar-wrap">
                      <img className="avatar" src={donation.imageUrl} alt="" />
                    </span>
                  </div>
                </div>

                <p>
                  <span className="brand-primary">
                    <span className="far fa-comment" aria-hidden="true" />
                  </span>{" "}
                  {donation.message}{" "}
                </p>
                <p>
                  <span class="fas fa-pound-sign" /> {donation.currencyCode}{" "}
                  <strong>{donation.amount}</strong>{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Donations;
