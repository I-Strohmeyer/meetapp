import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  clickOnDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  render() {
    const { showDetails } = this.state;

    return (
      <div className="event">
        <p className="dateTime">Date & Time</p>
        <p className="summary">Summary</p>
        <p className="organizer">organizer</p>
        <button className="detailBtn" onClick={this.clickOnDetails}>
          Details
        </button>
        {showDetails && (
          <div className="details">
            <h3>Details:</h3>
            <p className="location">Location</p>
            <p className="description">Description</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
