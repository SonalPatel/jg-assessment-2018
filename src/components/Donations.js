import React from "react";
//settings and state (using this.state for the API)
class Donations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: [] //my donations empty array
    };
  }

  //when the component has mounted (page has loaded) we want to perform our ajax call using Fetch which is the modern way to make an ajax call
  //( // can check with console.log("did mount");)
  // the headers were required as the api was xml: if its not json then make it json.
  componentDidMount() {
    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441/donations", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      //fetching the json, (.then is like a callback function)
      .then(res => res.json())
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
    //check if error then display an error message {error.message} is part of react
    //check if the content has loaded and set the state
    if (error) {
      return <div>Error: {error.message} </div>;
    }
    //if its true that is has loaded then show the text loading message
    if (!isLoaded) {
      return (
        <div className="brand-primary">
          <p>Loading latest donation details...</p>
          <div className="lds-circle" />
        </div>
      );
    }
    {
      // returns the content from the api and then iterates over each object to allow me access to the info
      //(content is my varible name for the instance of each index defined in the settings at the top);
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
