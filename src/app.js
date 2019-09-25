import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const title = 'React minimal boilerplate.';

class App extends Component {
  render() {
    return (
      <div>{title} <h1>Hello, world.</h1></div>
    );
  }
}

export default hot(module)(App);
