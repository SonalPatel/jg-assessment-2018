import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header.js";
import WrapContainer from "./containers/WrapContainer.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*change the header to my own component and add it here*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="testing-sass">MY JG APP</p>
      </div>
    );
  }
}

export default App;
