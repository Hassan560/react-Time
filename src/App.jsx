import React from "react";
import "./App.css";
// lifecyle methods
// mount
// updating
// unmount

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
    this.time = null;
    console.log("constructor");
  }
  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    });
    console.log("componentDidMount");
  }

  render() {
    return (
      <>
        <div className="main">
          <span>Clock</span>
          <div className="main1">
            <h1>{this.state.date}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default App;
