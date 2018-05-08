import React from "react";

class CharityInfo extends React.Component {
  //settings and state  using this site for the API
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      charityContent: [] // my empty array
    };
  }

  //when the component has mounted (loaded) we want to perform our ajax call
  componentDidMount() {
    // check with console.log("did mount");

    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441")
      .then(res => res.json()) //fetching the json, (then is like a callback function)

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
    //check if error {error.message} is part of react
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      //if its true that is has loaded then show the text loading
      return <div className="brand-primary">Loading charity content...</div>; //if time add an animated spinner
    } else {
      // returns the content from the api and then iterates over each object to allow me access to the info
      //(hit is my varibale name for the instance of each index defined in the settings at the top);
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

            <h1>{charityContent.name}</h1>
          </div>

          <p>
            {charityContent.name} {charityContent.impactStatementWhat} to{" "}
            {charityContent.impactStatementWhy}
          </p>

          <p>{charityContent.description}</p>

          <ul className="list-items">
            <li>Contact us at: {charityContent.emailAddress}</li>
            <li>
              {charityContent.name} registered charity number:{" "}
              {charityContent.id}
            </li>
            <li>
              {" "}
              <a href={charityContent.profilePageUrl}>
                Find out more about {charityContent.name}{" "}
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default CharityInfo;
