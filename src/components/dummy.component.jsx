import React, { Component } from 'react';
import axios from 'axios';

export default class Dummy extends Component {
  constructor(props) {
    super(props);
    this.userlistElement = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.state = {
      username: ''
    }
  }

  componentWillMount() {
    // console.log('component will mount');
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })

    document.getElementById('user').value = '';
  }

  render() {
    return(
      <div>
        This dummy component creates a POST to add a User in DB.<br />
        User: {this.state.username}
        <form onSubmit={this.onSubmit}>
          <input id="user" onChange={this.onChangeUsername} />
        </form>
      </div>
    );
  }
}
