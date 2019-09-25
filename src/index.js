import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'React minimal boilerplate.';

ReactDOM.render(
  <div>{title} <App /></div>,
  document.getElementById('app')
);
