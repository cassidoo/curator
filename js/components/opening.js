'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

const customStyles = {
  content : {
    backgroundColor : '#cab4a1',
    border : '6px solid #332c25'
  }
};

class Opening extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { modalIsOpen: false };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="opening">
      <h1 className="opening">Curator</h1>
      <div className="opening-buttons">
        <button onClick={this.openModal}>How to Play</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
        <button>New Game</button>
        <button>Load Game</button>
      </div>
    </div>
    );
  }
}

module.exports = Opening;
