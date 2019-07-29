import React from 'react';
import ReactDOM from 'react-dom';
import Thermostat from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thermostat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
