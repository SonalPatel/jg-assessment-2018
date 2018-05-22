import React from "react";

class CharityInfo extends React.Component {
  //settings and state (using this.state for the API)
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      charityContent: [] // my empty array
    };
  }

  //when the component has mounted (page has loaded) we want to perform our ajax call using Fetch which is the modern way to make an ajax call
  //( // can check with console.log("did mount");)
  // the headers were required as the api was xml: if its not json then make it json.
  componentDidMount() {
    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441", {
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
            charityContent: result
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
    const { error, isLoaded, charityContent } = this.state;
    //check if error then display an error message {error.message} is part of react
    //check if the charityContent has loaded and set the state
    if (error) {
      return <div>Error: {error.message} </div>;
    }

    //if its true that is has loaded then show the text loading message
    if (!isLoaded) {
      return (
        <div className="brand-primary">
          <p>Loading charity content...</p>
          <div className="lds-circle" />
        </div>
      );
    }
    // returns the content from the api and then iterates over each object to allow me access to the info
    //(charityContent is my varible name for the instance of each index defined in the settings at the top);
    return (
      <div className="content-info" id="content" role="main">
        <div className="charity-wrapper">
          <div className="charity-logo-wrap">
            <img
              className="charity-logo img-fluid"
              src={charityContent.logoAbsoluteUrl}
              alt={`${charityContent.name} Logo`}
            />
          </div>

          <h1 className="off-screen">{charityContent.name}</h1>
        </div>
        <div className="charity-info">
          <h2>
            {charityContent.name} {charityContent.impactStatementWhat} to{" "}
            {charityContent.impactStatementWhy}
          </h2>

          <p>{charityContent.description}</p>
          <a href={charityContent.profilePageUrl}>
            Find out more about {charityContent.name}{" "}
          </a>
        </div>

        <aside role="complementary">
          <ul className="list-items">
            <li>
              <strong>Contact us at: </strong>
              <a href={`mailto${charityContent.emailAddress}`}>
                {charityContent.emailAddress}
              </a>{" "}
            </li>
            <li>
              <strong>{charityContent.name} registered charity number:</strong>{" "}
              {charityContent.id}
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default CharityInfo;
