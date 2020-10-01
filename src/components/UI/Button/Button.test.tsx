import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button view', () => {
  it('should render without errors', () => {
    const { getByText } = render(
      <Button>Some label</Button>
    );

    expect(getByText('Some label')).toBeInTheDocument();
  })
})