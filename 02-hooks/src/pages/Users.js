import React from 'react'
import Loading from '../component/Loading';
import useFetchUsers from '../services/hooks/useFetchUsers';
import UserCard from '../component/UserCard';
import { Alert, Container, Navbar, Row } from "react-bootstrap";

function Users () {
  const { loading, error, datas: users } = useFetchUsers();
  
  return (
    <section>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#"><h1>Users Profile</h1></Navbar.Brand>
      </Navbar>
      <Container fluid>
      {error != null 
        ? <Alert variant="danger">{error}</Alert> 
        : <div>
            
              {loading 
              ? (<Loading />)
              : <Row className="d-flex justify-content-center">
                  {users.map((user, key) => {
                    return <UserCard key={ key } data={ user }/>;
                  })}
                </Row>
              }
          </div>
      }
      </Container>
    </section>    
  );
}

export default Users;