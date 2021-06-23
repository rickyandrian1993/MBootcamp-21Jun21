import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserItem extends Component {
  render() {
    return (
      <div class="row">
        <Card className="mx-4 my-2" style={{ width: '18rem', color: '#000'}}>
          <Card.Img variant="top" src={this.props.user.picture.large} />
          <Card.Body>
            <Card.Title>{this.props.user.name.title}. {this.props.user.name.first} {this.props.user.name.last}</Card.Title>
            <Card.Text>{this.props.user.email}</Card.Text>
            <Card.Text>{this.props.user.phone}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
