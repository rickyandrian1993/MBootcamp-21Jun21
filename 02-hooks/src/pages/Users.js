import React from 'react'
import useFetchUsers from '../services/hooks/useFetchUsers'
import Loading from '../component/Loading'
import UserCard from '../component/UserCard'
import UserDetail from '../component/UserDetail'
import { Alert, Container, Nav, Navbar, Row } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Users () {
  const { loading, error, datas: users } = useFetchUsers();
  
  return (
    <Router>
      <section>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#"><h1>Users Profile</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                {/* <Link className="nav-link" to="/user">User</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid>
        <Switch>
          {/* <Route exact path="/" component={ UserCard } /> */}
          <Route path="/user/:uid" component={ UserDetail } />
          {/* <Route path="/user" component={ UserCard } /> */}
        </Switch>
        {error != null 
          ? <Alert variant="danger">{error}</Alert> 
          : <div>
            {loading 
            ? (<Loading />)
            : <Row className="d-flex justify-content-center">
                {users.map((user, idx) => {
                  return <UserCard key={ idx } data={ user }/>;
                })}
              </Row>
            }
            </div>
        }
        </Container>
      </section>
    </Router>
  );
}

export default Users;