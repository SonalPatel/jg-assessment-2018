import React from "react";

class Donations extends React.Component {
  //settings and state  using this site for the API
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      donations: [] //my donations empty array
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
    const { error, isLoaded, donations } = this.state;
    //checkif there are any errors,  {error.message} is part of react
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      //if its true that is has loaded then show the text loading...
      return (
        <div className="brand-primary">
          Loading latest donation details..<span
            class="fas fa-spinner"
            aria-hidden="true"
          />
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
              <span class="fas fa-hand-holding-heart" aria-hidden="true" />
            </span>{" "}
            Latest charity donations
          </h2>
          <ul>
            {donations.map(donation => (
              <li className="x" key={donation.name}>
                <h3>{donation.donorDisplayName}</h3>{" "}
                <p>
                  <span>{donation.donorLocalCurrencyCode}</span>{" "}
                  <strong>{donation.donorLocalAmount}</strong>{" "}
                </p>
                <p>{donation.message} </p>
                <p>
                  <span>{donation.donationDate} </span>
                </p>
                <p>
                  <span className="avatar-wrap">
                    <img className="avatar" scr={donation.imageUrl} alt="" />
                  </span>{" "}
                  {/* image not rendering just the url */}
                </p>{" "}
                <p>
                  <span className="brand-primary">
                    <span class="far fa-comment" aria-hidden="true" />
                  </span>{" "}
                  {donation.description}
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
