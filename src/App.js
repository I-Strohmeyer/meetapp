import React from "react";

import EventList from "./EventList";
import { CitySearch } from "./CitySearch";
import "./App.css";
import { NumberOfEvents } from "./NumberOfEvents";

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
