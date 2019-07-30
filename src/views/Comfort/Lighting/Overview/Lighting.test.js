import React from 'react';
import ReactDOM from 'react-dom';
import Thermostat from './Lighting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lighting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
