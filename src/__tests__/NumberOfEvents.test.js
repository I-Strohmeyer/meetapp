import React from "react";
import { shallow } from "enzyme";
import { NumberOfEvents } from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render the number of events", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  test("render input with numbers", () => {
    expect(NumberOfEventsWrapper.find(".eventsnumber_input")).toHaveLength(1);
  });

  test("update number state when text input gets changed by user", () => {
    NumberOfEventsWrapper.setState({
      eventsNumber: 16,
    });
    NumberOfEventsWrapper.find(".eventsnumber_input").simulate("change", {
      target: { value: 8 },
    });
    expect(NumberOfEventsWrapper.state("eventsNumber")).toEqual(8);
  });
});
