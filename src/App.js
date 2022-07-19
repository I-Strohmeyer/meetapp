import React, { Component } from "react";

import EventList from "./EventList";
import { CitySearch } from "./CitySearch";
import { NumberOfEvents } from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { Header } from "./Header";
import { NetworkAlert } from "./Alert";

import "./nprogress.css";
import "./App.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 32,
    selectedLocations: "all",
    alertText:
      "It looks like you are currently offline. You will still be able to use the App.",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (location === undefined) {
      location = this.state.selectedLocations;
    }

    if (eventCount === undefined) {
      eventCount = this.state.eventsNumber;
    }

    if (eventCount <= 0) {
      eventCount = 1;
    }

    if (eventCount > 32) {
      eventCount = 32;
    }

    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        eventsNumber: eventCount,
      });
    });
  };

  updateNumberEvents = (eventsNumber) => {
    this.setState({
      eventsNumber,
    });
    this.updateEvents(undefined, eventsNumber);
  };

  render() {
    return (
      <div className="App">
        {!navigator.onLine && <NetworkAlert text={this.state.alertText} />}

        <div className="topwrapper">
          <Header />
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
        </div>

        <NumberOfEvents updateNumberEvents={this.updateNumberEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
