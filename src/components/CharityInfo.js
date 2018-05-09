import React from "react";

class CharityInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      charityContent: []
    };
  }

  componentDidMount() {
    fetch("https://api.justgiving.com/8b28a350/v1/charity/13441", {
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
            charityContent: result
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
    const { error, isLoaded, charityContent } = this.state;

    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return (
        <div className="brand-primary">
          <p>Loading charity content...</p>
          <div className="lds-circle" />
        </div>
      );
    } else {
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
                <strong>
                  {charityContent.name} registered charity number:
                </strong>{" "}
                {charityContent.id}
              </li>
            </ul>
          </aside>
        </div>
      );
    }
  }
}

export default CharityInfo;
