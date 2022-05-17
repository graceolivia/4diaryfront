import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiQuery from './ApiQuery';

describe('<ApiQuery />', () => {
  test('it should mount', () => {
    render(<ApiQuery />);
    
    const apiQuery = screen.getByTestId('ApiQuery');

    expect(apiQuery).toBeInTheDocument();
  });
});