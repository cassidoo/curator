'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

class Opening extends React.Component {
  render() {
    return (
      <div className="opening">
      <h1 className="opening">Curator</h1>
      <div className="opening-buttons">
        <button onClick={this.showAboutModal}>How to Play</button>
        <button>New Game</button>
        <button>Load Game</button>
      </div>
    </div>
    );
  }

  showAboutModal() {
  }
}

module.exports = Opening;
