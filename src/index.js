import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component updated");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Lattitude: {this.state.lat}</div>;
    }
    return <div> Loading! {this.state.lat}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
