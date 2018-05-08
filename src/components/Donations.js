import React from "react";

class Donations extends React.Component {
  //settings and state  using this site for the API
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: [] //my donations empty object
    };
  }

  //when the component has mounted (loaded) we want to perform our ajax call
  componentDidMount() {
    // check with console.log("did mount");

    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441/donations", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json()) //fetching the json, (then is like a callback function)

      //update the state with the info from the api (state is like a holding place setState is a react method)
      .then(
        result => {
          this.setState({
            isLoaded: true,
            content: result
          });
        },
        //error function just in case (error is a built in react property)
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
    //checkif there are any errors,  {error.message} is part of react
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      //if its true that is has loaded then show the text loading...
      return (
        <div className="brand-primary">
          <p>
            Loading latest donation details...<span className="loading-spinner" />
          </p>
        </div>
      );
    } else {
      // returns the content from the api and then iterates over each object to allow me access to the info
      //(test is my varibale name for the instance of each index defined in the settings at the top (MY EMPTY ARRAY: named content));
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
                    <h3> {donation.donorDisplayName} </h3>
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
                  {donation.currencyCode} <strong>{donation.amount}</strong>{" "}
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
