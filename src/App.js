import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header.js";
import WrapContainer from "./containers/WrapContainer.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <p className="testing-sass">MY JG APP</p>

        <Footer />
      </div>
    );
  }
}

export default App;
