import React, { Component } from 'react';

export default class Piece extends Component {
  constructor(props) {
    super(props);
  }

  onChangeValue(e) {
    this.setState({
      size: e.target.value
    });
  }

  componentDidMount() {
  }

  selectPiece(e) {
    console.log(e);
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
      <span class='piece' onClick={this.selectPiece}>.</span>
    );
  }
}
