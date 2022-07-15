import React, { Component } from "react";

import { ErrorAlert } from "./Alert";

export class NumberOfEvents extends Component {
  state = {
    eventsNumber: 32,
    errorText: "",
  };

  handleNumOfEvents = (e) => {
    //let updatedNumber = parseInt(e.target.value);
    let updatedNumber = e.target.value;
    if (updatedNumber > 32 || updatedNumber < 1) {
      this.setState({
        eventsNumber: updatedNumber,
        errorText: "Please select a number between 1 and 32.",
      });
    } else {
      this.setState({
        eventsNumber: updatedNumber,
        errorText: "",
      });
    }
    this.props.updateNumberEvents(undefined, updatedNumber);
    console.log(this.errorText);
  };

  render() {
    return (
      <>
        <div className="NumberOfEvents">
          <div className="results">Results</div>
          <div className="labelinput">
            <label htmlFor="number">Show</label>
            <input
              className="eventsnumber_input"
              name="number"
              id="number"
              type="number"
              min="1"
              max="32"
              value={this.state.eventsNumber}
              onChange={this.handleNumOfEvents}
            ></input>
          </div>
        </div>
        <ErrorAlert text={this.state.errorText} />
      </>
    );
  }
}
