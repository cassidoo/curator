'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Opening = require('./components/opening');

class App extends React.Component {
  render() {
    return (
      <Opening />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#content'))
