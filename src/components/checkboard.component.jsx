import React, { Component } from 'react';

export default class Checkerboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 8,
      lastMove: ''
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
      piece.addEventListener('click', this.selectPiece.bind(this));
    })
  }

  suggestMoves(playerPiece, move1, move2, block) {
    if (block !== this.state.lastMove) {
      if (move1 && (move1.innerText !== 'x')) {
        move1.classList.toggle('suggested');
        move1.addEventListener('click', () => {
          this.setState({ lastMove: move1 });
          block.innerHTML = '.';
          move1.innerHTML = playerPiece;
          move1.classList.remove('suggested');
          if (move2) { move2.classList.remove('suggested'); }
        });
       }
      if (move2 && (move2.innerText !== 'x')) {
        move2.classList.toggle('suggested');
        move2.addEventListener('click', () => {
          this.setState({ lastMove: move2 });
          block.innerHTML = '.';
          move2.innerHTML = playerPiece;
          move2.innerHTML = playerPiece;
          move2.classList.remove('suggested');
          if (move1) { move1.classList.remove('suggested'); }
        });
      }
    }
  }

  selectPiece(e) {
    const block = e.currentTarget;
    const piece = e.currentTarget.querySelector('.piece');

    const positionX = parseInt(block.dataset.col, 10);
    const positionY = parseInt(block.dataset.row, 10);
    const jumpRightX = positionX - 1;
    const jumpLeftX = positionX + 1;
    const p1piece = `<span class='p1-piece piece'>x</span>`;
    const p2piece = `<span class='p2-piece piece'>x</span>`;

    if (piece) {
      piece.classList.toggle('selected');
      const p1 = piece.classList.contains('p1-piece');
      if (p1) {
        const shiftY = positionY + 1;
        const move1 = document.querySelector(`[data-col='${jumpRightX}'][data-row='${shiftY}']`);
        const move2 = document.querySelector(`[data-col='${jumpLeftX}'][data-row='${shiftY}']`);
        this.suggestMoves(p1piece, move1, move2, block, this);
      } else {
        const shiftY = positionY - 1;
        const move1 = document.querySelector(`[data-col='${jumpRightX}'][data-row='${shiftY}']`);
        const move2 = document.querySelector(`[data-col='${jumpLeftX}'][data-row='${shiftY}']`);
        this.suggestMoves(p2piece, move1, move2, block, this);
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
      const p1piece = `<span class='p1-piece piece'>x</span>`;
      const p2piece = `<span class='p2-piece piece'>x</span>`;

      if (row % 2 === 0) {
        for (let col = 0; col <= size; col++) {
          if (col % 2 === 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>${p1piece}</div>`
            } else if ((row > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>${p2piece}</div>`
            } else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>.</div>`
            }
          }
          if (col % 2 !== 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>${p1piece}</div>`
            } else if ((row > (size - 2)) && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>${p2piece}</div>`
            } else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>.</div>`
            }
          }
        }
      }
      if (row % 2 !== 0) {
        for (let col = 0; col <= size; col++) {
          if (col % 2 === 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>${p1piece}</div>`
            } else if ((row > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>${p2piece}</div>`
            }
            else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block white-block'>.</div>`
            }
          }
          if (col % 2 !== 0) {
            if (row < 2 && bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>${p1piece}</div>`
            } else if ((row > (size - 2)) & bigEnough) {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>${p2piece}</div>`
            }
            else {
              thisBoard.innerHTML += `<div data-row='${row}' data-col='${col}' class='board-block black-block'>.</div>`
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
