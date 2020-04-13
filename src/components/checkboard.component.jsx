import React, { Component } from 'react';

export default class Checkerboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 8,
      p1color: 'red',
      p2color: 'black'
    }
  }

  onChangeValue(e) {
    this.setState({
      size: e.target.value
    });
  }

  changeP1color(e) {
    const pieces = document.querySelectorAll('.red-piece');
    pieces.forEach(piece => {
      piece.style.backgroundColor = e.target.value;
      piece.style.color = e.target.value;
    })
  }

  changeP2color(e) {
    const pieces = document.querySelectorAll('.black-piece');
    pieces.forEach(piece => {
      piece.style.backgroundColor = e.target.value;
      piece.style.color = e.target.value;
    })
  }

  changeP1shape(e) {
    const pieces = document.querySelectorAll('.red-piece');
    pieces.forEach(piece => {
      piece.style.borderRadius = e.target.value;
    })
  }

  changeP2shape(e) {
    const pieces = document.querySelectorAll('.black-piece');
    pieces.forEach(piece => {
      piece.style.borderRadius = e.target.value;
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const board = document.getElementById('board');
    const size = this.state.size;
    const bigEnough = this.state.size >= 3;
    board.innerHTML = "";


    for (let i = 0; i <= size; i++) {
      board.innerHTML += `<div id='board-row-${i}' class='board-row d-flex text-center'>`;
    }

    for (let i = 0; i <= size; i++) {
      const thisBoard = document.getElementById(`board-row-${i}`);
      if (i % 2 === 0) {
        for (let i2 = 0; i2 <= size; i2++) {
          if (i2 % 2 === 0) {
            if (i < 2 && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'><span class='red-piece piece'>x</span></div>"
            } else if ((i > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'><span class='black-piece piece'>x</span></div>"
            } else {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'>x</div>"
            }
          }
          if (i2 % 2 !== 0) {
            if (i < 2 && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block text-white'><span class='red-piece piece'>x</span></div>"
            } else if ((i > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block text-white'><span class='black-piece piece'>x</span></div>"
            } else {
              thisBoard.innerHTML += "<div class='board-block text-white'>x</div>"
            }
          }
        }
      }
      if (i % 2 !== 0) {
        for (let i3 = 0; i3 <= size; i3++) {
          if (i3 % 2 === 0) {
            if (i < 2 && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block text-white'><span class='red-piece piece'>x</span></div>"
            } else if ((i > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += "<div class='board-block text-white'><span class='black-piece piece'>x</span></div>"
            }
            else {
              thisBoard.innerHTML += "<div class='board-block text-white'>x</div>"
            }
          }
          if (i3 % 2 !== 0) {
            if (i < 2 && bigEnough) {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'><span class='red-piece piece'>x</span></div>"
            } else if ((i > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'><span class='black-piece piece'>x</span></div>"
            }
            else {
              thisBoard.innerHTML += "<div class='board-block bg-dark text-dark'>x</div>"
            }
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
          <div>
            P1 Color:
            Red <input type="radio" name="p1color" onClick={this.changeP1color} value="red" defaultChecked />&nbsp;
            Green <input type="radio" name="p1color" onClick={this.changeP1color} value="green" />&nbsp;
            Brown <input type="radio" name="p1color" onClick={this.changeP1color} value="brown" />
          </div>
          <div>
            P1 Shape:
            Circle <input type="radio" name="p1shape" onClick={this.changeP1shape} value="50%" defaultChecked />&nbsp;
            Square <input type="radio" name="p1shape" onClick={this.changeP1shape} value="0" />
          </div>
          <div>
            P2 Color:
            Black <input type="radio" name="p2color" onClick={this.changeP2color} value="black" defaultChecked />&nbsp;
            Purple <input type="radio" name="p2color" onClick={this.changeP2color} value="purple" />&nbsp;
            Orange <input type="radio" name="p2color" onClick={this.changeP2color} value="orange" />
          </div>
          <div>
            P2 Shape:
            Circle <input type="radio" name="p2shape" onClick={this.changeP2shape} value="50%" defaultChecked />&nbsp;
            Square <input type="radio" name="p2shape" onClick={this.changeP2shape} value="0" />
          </div>
        </form>

        <div id="board" className="w-100">
          <div className="board-row d-flex text-center">
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
            <div className="board-block text-white"><span className="red-piece piece">X</span></div>
            <div className="board-block bg-dark text-dark"><span className="red-piece piece">X</span></div>
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
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
          </div>
          <div className="board-row d-flex text-center">
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
            <div className="board-block text-white"><span className="piece black-piece">x</span></div>
            <div className="board-block bg-dark text-dark"><span className="piece black-piece">x</span></div>
          </div>
        </div>
      </div>
    );
  }
}
