import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";

import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */

  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("the user is on the main page of the app", () => {
      AppWrapper = mount(<App />);
    });

    when("an event is displayed", () => {});

    then("the event details will be collapsed.", () => {
      expect(AppWrapper.find(".details")).toHaveLength(0);
    });
  });

  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user is displayed with a list of events", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user clicks on an individual event", () => {
      AppWrapper.update();
      AppWrapper.find(".detailBtn").at(0).simulate("click");
    });

    then("the event details will be displayed", () => {
      expect(AppWrapper.find(".details")).toHaveLength(1);
    });
  });

  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  /* ____________________________________________________________ */
  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("The user has clicked on an event to display details", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".detailBtn").at(0).simulate("click");
      expect(AppWrapper.find(".details")).toHaveLength(1);
    });

    /* "collapse" button */
    when("the user clicks on “close” button", () => {
      AppWrapper.find(".detailBtn").at(0).simulate("click");
    });

    then("the event details will hide", () => {
      expect(AppWrapper.find(".details")).toHaveLength(0);
    });
  });
});
