import React from 'react';
import { render } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header view', () => {
  it('should render without errors', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('AppName')).toBeInTheDocument();
    expect(getByLabelText('Search:')).toBeInTheDocument();
    expect(getByPlaceholderText('Search GIFs by keyword')).toBeInTheDocument();
  })
})