import React from 'react';
import ReactDOM from 'react-dom';
import StockApp from './StockApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
