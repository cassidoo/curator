var React = require('react')

var App = React.createClass({
  render: function () {
    return <div className="opening">
      <h1 className="opening">Curator</h1>
      <div className="opening-buttons">
        <button onClick={this.showAboutModal}>How to Play</button>
        <button>New Game</button>
        <button>Load Game</button>
      </div>
    </div>
  },
  showAboutModal: function () {
  }
})
React.render(<App />, document.querySelector('#content'))
