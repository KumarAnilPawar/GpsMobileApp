import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders OktaLoginScreenController', () => {
    const { getByText } = render(<App />);
    expect(getByText(/login/i)).toBeTruthy();
  });
  it('renders OktaLoginScreenController', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('okta-login-screen-controller')).toBeTruthy();
  });
});
