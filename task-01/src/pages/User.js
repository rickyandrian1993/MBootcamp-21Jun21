import React, { Component } from 'react';
import UserItem from '../components/UserItem';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

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
      <div className="App">
        <header className="App-header">
          <Container fluid>
           <Row>
            {this.state.users.map((user, key) => {
              return <UserItem key={key} user={user}/>
            })}
           </Row>
          </Container>
        </header>
      </div>
    );
  };
}
