import React from 'react';
import ReactDOM from 'react-dom';
import ThermZone1 from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThermZone1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
