import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard(props) {
  return (
    <div>
      <Card className="mx-4 my-2 shadow" style={{ width: '18rem', color: '#000'}}>
        <Card.Img className="rounded" variant="top" src={props.data.picture.medium} />
        <Card.Body>
          <Card.Title className="text-center">{props.data.name.title}. {props.data.name.first} {props.data.name.last}</Card.Title>
          <Card.Text>{props.data.email}</Card.Text>
          <Card.Text>{props.data.phone}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;