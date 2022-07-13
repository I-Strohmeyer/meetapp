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

  getStartDateAndTime = (eventTime) => {
    let d = new Date(eventTime);
    let date = d.toLocaleDateString("en-GB");
    const time = new Date(eventTime).toLocaleTimeString("en", {
      timeStyle: "short",
      hour12: false,
    });
    let combined = `${date} | ${time}`;
    return combined;
  };

  render() {
    const { showDetails } = this.state;
    const { event } = this.props;

    let isoDate = event.start.dateTime;
    var d = new Date(isoDate);
    let date = d.toLocaleDateString("en-GB");

    return (
      <div className="event">
        <p className="dateTime">
          {date} ({event.start.timeZone})
        </p>
        <p className="summary">{event.summary}</p>
        <p className="organizer">Organizer: {event.organizer.email}</p>
        {showDetails && (
          <div className="details">
            <h3>
              <hr></hr>
            </h3>
            <p className="location">Location: {event.location}</p>
            <p className="description">{event.description}</p>
            <p className="linkwrapper">
              Link:
              <a className="calenderLink" href="{event.htmlLink}">
                Google Calendar
              </a>
            </p>
          </div>
        )}
        {showDetails ? (
          <button className="detailBtn" onClick={this.clickOnDetails}>
            Collapse
          </button>
        ) : (
          <button className="detailBtn" onClick={this.clickOnDetails}>
            Details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
