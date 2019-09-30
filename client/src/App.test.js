import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import NavBar from './components/NavBar';

describe('App', () => {
  it('renders a h1 with the text user data', () => {
    const wrapper = rtl.render(
        <NavBar>
          <h1></h1>
        </NavBar>
      );
    const element = wrapper.queryByText(/user data/i);
    
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })
})
