import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('App', () => {
  it('renders a span with the text Hello World', () => {
    const wrapper = rtl.render(<App />);
    const element = wrapper.queryByText(/hello world/i);

    console.log(element.textContent);
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })
})
