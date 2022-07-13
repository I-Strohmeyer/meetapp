import React, { Component } from "react";

import EventList from "./EventList";
import { CitySearch } from "./CitySearch";
import { NumberOfEvents } from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { Header } from "./Header";

import "./nprogress.css";
import "./App.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsNumber: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
      console.log(events);
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateNumberEvents = (eventsNumber) => {
    this.setState({
      eventsNumber,
    });
    console.log(eventsNumber);
  };

  render() {
    return (
      <div className="App">
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
