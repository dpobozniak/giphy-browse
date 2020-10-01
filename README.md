# GIPHYBrowse

A new UI for [GIPHY](https://giphy.com) (a service for finding GIFs) written in `react` and `typescript`.

Key points 🤗
- Fetching data using react custom hooks.
- Using `AbortController` react is able to abort `fetch` requests when the component unmounts, as well as before re-running the effect due to a subsequent render.
- Search form and navigation is made with accessibility in mind.
- Gallery made using css `grid`.
- `<picture>` element used to show `WebP` whenever browers support it and fall back to legacy formats for clients that don't.
- Clicking image in a gallery opens a modal on top of the gallery screen and the URL changes so the user can share URL and open details in new window too.

Trade-offs 🧐
Due to lack of time some features are missing or could be improved.
- Pagination could be improved with infinite scroll using `Intersection Observer`.
- Not enough tests - only some of the components and services have basic tests written.
- Favourites functionality is synchronous due to `localStorage` nature. For sure it would need to be rewriten to support async api calls.

## Installation

In the project directory use `npm install` to install it on local machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:8769](http://localhost:8769) to view it in the browser.

The page will reload if you make edits.
You will also see any code errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Launches code linting.

- `npm run lint:js` using [ESLint](http://eslint.org) and [airbnb](https://github.com/airbnb/javascript) JS Style Guide.

### `npm test`

Launches code testing.