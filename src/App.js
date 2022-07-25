import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import EventList from "./EventList";
import { CitySearch } from "./CitySearch";
import { NumberOfEvents } from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { Header } from "./Header";
import { NetworkAlert } from "./Alert";
import { EventGenre } from "./EventGenre";

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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
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
        <div className="data-vis-wrapper">
          <div className="pie-wrapper card">
            <EventGenre events={this.state.events} />
          </div>

          <div className="scatter-wrapper card">
            <ResponsiveContainer>
              <ScatterChart
                height={300}
                width={400}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="Events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#009EEC" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
