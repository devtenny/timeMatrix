import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('renders app', () => {
  expect(shallow(<App />).length).toBe(1);
});
