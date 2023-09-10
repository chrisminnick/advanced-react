# Getting Started with Server Side Rendering

This demo shows how to use [React](https://reactjs.org/) with [Express](https://expressjs.com/) to render a React app on the server.

## Setup

```sh
npm install
```

Build the app:

```sh
npm run build
```

Start the server:

```sh
node server/index.js
```

The benefits of server side rendering are:

- Better SEO
- Faster initial page loads
- Better performance on mobile and low-powered devices
- More resilient to JavaScript errors

## How it works

The server uses the [`renderToString`](https://reactjs.org/docs/react-dom-server.html#rendertostring) method to render a React element to a string. This is then sent to the client inside a `<script>` tag in the `index.html` file.

The client then uses [`ReactDOM.hydrate`](https://reactjs.org/docs/react-dom.html#hydrate) to render over the existing server-rendered HTML.
