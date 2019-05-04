import React from 'react';
import ReactDOM from 'react-dom';
import ClickGame from './components/ClickGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
