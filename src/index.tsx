import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './containers/App/App';

const rootElement = document.getElementById('app');

render(
  <ErrorBoundary>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ErrorBoundary>,
  rootElement,
);
