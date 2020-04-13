import React, { Component } from 'react';

export default class Checkerboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 8
    }
  }

  componentWillMount() {
    // console.log('component will mount');
  }

  onChangeValue(e) {
    this.setState({
      size: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);

    document.getElementById('boardsize').value = '';
  }

  render() {
    return(
      <div>
        Test
        <form onSubmit={this.onSubmit.bind(this)}>
          <input id="boardsize" onChange={this.onChangeValue.bind(this)} pattern="\d{1,5}" />
        </form>

        <div className="checkerboard">

        </div>
      </div>
    );
  }
}
