import React, { Component } from "react";

export class NumberOfEvents extends Component {
  state = {
    eventsNumber: 32,
  };

  handleNumOfEvents = (e) => {
    //let updatedNumber = parseInt(e.target.value);
    let updatedNumber = e.target.value;
    this.setState({
      eventsNumber: updatedNumber,
    });
    this.props.updateNumberEvents(updatedNumber);
  };

  render() {
    return (
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
    );
  }
}
