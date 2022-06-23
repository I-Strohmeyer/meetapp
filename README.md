# MeetApp

Meet up App

See upcoming events in a city close to you!

# Tech-Stack:

- React

# User Stories

Feature 2 - Show/hide an event's details:
As a “User” I should be able to “expand/collapse” an event, so that I can “show or hide” the event details.

Feature 3 - Specify number of events:
As a “User” I should be able to “specify the number” of event, so that I can “customise” the number of events I want to see.

Feature 4 - Use the app when offline:
As a “User” I should be able to “use the app offline, so that I can “see events” when no internet is available.

Feature 5 - Data visualization:
As a “User” I should be able to “see a chart of upcoming” events, so that I see which upcoming events each city has.

# Scenarios

Feature 2: Show/hide an event's details

Scenario 1: An event element is collapsed by default
Given: User hasn't searched for anything yet
When: User hasn't clicked on any event
Then: Event details are hidden/collapsed

Scenario 2: User can expand an event to see its details
Given: User has entered a search term
When: User has clicked on an event
Then: Event details are shown/expanded

Scenario 3: User can collapse an event to hide its details
Given: User doesn't need the event details
When: User clicks on said event
Then: Event details will be hidden

Feature 3: Specify number of events

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given: No number has been specified by the user
When: User starts a search
Then: Default number of events are listed (32)

Scenario 2: User can change the number of events they want to see
Given: User has decided on a number of events
When: User has selected the number of events
Then: The number of events chose by the user will be shown

Feature 4: Use the app when offline

Scenario 1: Show cached data when there’s no internet connection
Given: User has no internet connection
When: User tries to use app wihtout having internet
Then: Cached data is available to view

Scenario 2: Show error when user changes the settings (city, time range)
Given: User tries to show something that is not cached
When: user changes search filters/settings
Then: Error message will be shown to user

Feature 5: Data visualization

Scenario 1: Show a chart with the number of upcoming events in each city
Given: User wants to see the upcoming events
When: User is viewing the upcoming events (chart)
Then: Upcoming events will be shown
