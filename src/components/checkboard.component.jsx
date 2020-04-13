import React, { Component } from 'react';

export default class Checkerboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 8
    }
  }


  onChangeValue(e) {
    this.setState({
      size: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);

    const board = document.getElementById('board');
    const size = this.state.size;

    board.innerHTML = "";

    for (let i = 0; i <= size; i++) {
      board.innerHTML += `<div id='board-row-${i}' class='board-row d-flex text-center'>`;
    }

    for (let i = 0; i <= size; i++) {
      const thisBoard = document.getElementById(`board-row-${i}`);
      console.log(thisBoard);
      if (i % 2 === 0) {
        for (let i2 = 0; i2 <= size; i2++) {
          if (i2 % 2 === 0) {
            thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'>x</div>"
          }
          if (i2 % 2 !== 0) {
            thisBoard.innerHTML += "<div class='board-block text-white'>x</div>"
          }
        }
      }
      if (i % 2 !== 0) {
        for (let i3 = 0; i3 <= size; i3++) {
          if (i3 % 2 === 0) {
            thisBoard.innerHTML += "<div class='board-block text-white'>x</div>"
          }
          if (i3 % 2 !== 0) {
            thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'>x</div>"
          }
        }
      }
    }
  }

  render() {
    return(
      <div>
        Type a number and press enter to re-render this board
        <form onSubmit={this.onSubmit.bind(this)}>
          <input id="boardsize" onChange={this.onChangeValue.bind(this)} pattern="\d{1,5}" />
        </form>

        <div id="board" className="w-100">
          <div className="board-row d-flex text-center">
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
          </div><div className="board-row d-flex text-center">
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
          </div><div className="board-row d-flex text-center">
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
          </div><div className="board-row d-flex text-center">
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
            <div className="board-block text-white">x</div>
            <div className="board-block bg-dark text-dark">x</div>
          </div>
        </div>
      </div>
    );
  }
}
