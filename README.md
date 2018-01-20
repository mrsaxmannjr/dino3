# Galvanize Dinosaurs - Apply

## Instructions

1. Refactor the provided site so that it uses your chosen front end framework.

2. Key functionality that you need to replicate includes:
  - Getting data from an API with fetch
  - Rendering that data
  - Binding data from an input to an element on the page
  - Toggling the preview on a click event

3. Your app must be broken down into components for the:
  - header
  - job details
  - input form
  - preview
  - footer

## Testing

1. Run `npm install`.
2. Host your app locally on port `8080`.
3. Navigate to this folder and run `npm test`.

#### Deployed Link
https://dino3drill.herokuapp.com/

The tests all pass on localhost but at the heroku page(the exact same code) Cypress gives an error(SecurityError: Blocked a frame with origin "https://dino3drill.herokuapp.com" from accessing a cross-origin frame.) because of security settings:https://docs.cypress.io/guides/guides/web-security.html#

#### Framework of choice
React
