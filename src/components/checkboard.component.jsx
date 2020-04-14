import React, { Component } from 'react';

export default class Checkerboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 8,
      selectedPiece: false
    }
  }

  onChangeValue(e) {
    this.setState({
      size: e.target.value
    });
  }

  componentDidMount() {
    this.renderBoard(this.state.size);
  }

  setUpPieces() {
    const pieces = document.querySelectorAll('.board-block');
    pieces.forEach(piece => {
      piece.addEventListener('click', this.selectPiece);
    })
  }

  selectPiece(e) {
    const block = e.currentTarget;
    const positionX = parseInt(e.currentTarget.dataset.col, 10);
    const positionY = parseInt(e.currentTarget.dataset.row, 10);
    const jumpRightX = positionX - 1;
    const jumpLeftX = positionX + 1;

    const piece = e.currentTarget.querySelector('.piece');
    console.log(`x: ${positionX}`);
    console.log(`y: ${positionY}`);
    console.log(`jumpRightX: ${jumpRightX}`);
    console.log(`jumpLeftX: ${jumpLeftX}`);
    console.log(piece);
    if (piece) {
      piece.classList.toggle('selected');
      const p1piece = piece.classList.contains('p1-piece');
      if (p1piece) {
        const shiftY = positionY + 1;
        console.log(`can move to ${jumpRightX}, ${shiftY} & ${jumpLeftX}, ${shiftY}`);
      } else {
        const shiftY = positionY - 1;
      }
    }

  }

  renderBoard(size) {
    const bigEnough = size >= 3;

    const board = document.getElementById('board');
    board.innerHTML = "";

    for (let i = 0; i <= size; i++) {
      board.innerHTML += `<div id='board-row-${i}' class='board-row d-flex text-center'>`;
    }

    for (let row = 0; row <= size; row++) {
      const thisBoard = document.getElementById(`board-row-${row}`);
      const p1piece = `<span class='p1-piece piece'>.</span>`;
      const p2piece = `<span class='p2-piece piece'>.</span>`;

      if (row % 2 === 0) {
        for (let col = 0; col <= size; col++) {
          if (col % 2 === 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>${p1piece}</div>`
            } else if ((row > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>${p2piece}</div>`
            } else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>.</div>`
            }
          }
          if (col % 2 !== 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>${p1piece}</div>`
            } else if ((row > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>${p2piece}</div>`
            } else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>.</div>`
            }
          }
        }
      }
      if (row % 2 !== 0) {
        for (let col = 0; col <= size; col++) {
          if (col % 2 === 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>${p1piece}</div>`
            } else if ((row > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>${p2piece}</div>`
            }
            else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block text-white'>.</div>`
            }
          }
          if (col % 2 !== 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>${p1piece}</div>`
            } else if ((row > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>${p2piece}</div>`
            }
            else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block bg-dark text-dark'>.</div>`
            }
          }
        }
      }
    } // end big for
    this.setUpPieces();
  }

  changeP1color(e) {
    const pieces = document.querySelectorAll('.p1-piece');
    pieces.forEach(piece => {
      piece.style.backgroundColor = e.target.value;
      piece.style.color = e.target.value;
    })
  }

  changeP2color(e) {
    const pieces = document.querySelectorAll('.p2-piece');
    pieces.forEach(piece => {
      piece.style.backgroundColor = e.target.value;
      piece.style.color = e.target.value;
    })
  }

  changeP1shape(e) {
    const pieces = document.querySelectorAll('.p1-piece');
    pieces.forEach(piece => {
      piece.style.borderRadius = e.target.value;
    })
  }

  changeP2shape(e) {
    const pieces = document.querySelectorAll('.p2-piece');
    pieces.forEach(piece => {
      piece.style.borderRadius = e.target.value;
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.renderBoard(this.state.size);
  }

  render() {
    return(
      <div className="d-flex justify-content-center flex-column">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input id="boardsize" onChange={this.onChangeValue.bind(this)} pattern="\d{1,5}" placeholder={this.state.size} />
          <button>Refresh</button>
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
        </div>
      </div>
    );
  }
}
