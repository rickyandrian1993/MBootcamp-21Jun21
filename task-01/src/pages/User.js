import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
      this.setState({
        users: data.results,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((user, key) => {
          <p key={key}>{user}</p>
        })}
      </div>
    );
  };
}
