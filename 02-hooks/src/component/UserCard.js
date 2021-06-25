import React from "react"
import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function UserCard(props) {
 
  const { data } = props;

  return (
    <div>
      <Card className="mx-4 my-2 shadow" style={{ width: '18rem', color: '#000' }}>
        <Card.Img className="rounded" variant="top" src={data.picture.medium} />
        <Card.Body>
          <Card.Title className="text-center">{data.name.title}. {data.name.first} {data.name.last}</Card.Title>
          <Card.Text>{data.email}</Card.Text>
          <Card.Text>{data.phone}</Card.Text>
          <Link to={`/user/${ data.login.uuid }`}>
            <Button variant="primary">Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;