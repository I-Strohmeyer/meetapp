import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render an event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render event date & time", () => {
    expect(EventWrapper.find(".dateTime")).toHaveLength(1);
  });

  test("details hidden is the default state", () => {
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

  test("render event location if details are shown", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".detailBtn").simulate("click");
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("render event description", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".detailBtn").simulate("click");
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });
});
