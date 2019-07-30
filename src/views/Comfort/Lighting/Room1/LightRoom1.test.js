import React from 'react';
import ReactDOM from 'react-dom';
import ThermZone1 from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LightRoom1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
