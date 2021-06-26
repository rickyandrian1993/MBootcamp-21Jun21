import React from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import NavigatorBar from '../components/NavigatorBar'
import AnimeCard from '../components/AnimeCard'
import AnimeDetail from '../components/AnimeDetail'
import useFetctAnimes from '../services/hooks/useFetchAnimes'
import { Container, Row } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const { datas: animes, error, loading } = useFetctAnimes();

  return (
    <Router>
      <NavigatorBar />
      <Switch>
        <Route exact path="/">
        {error != null 
          ? <Error error={ error } />
          : <Container fluid>
              {loading
                ? <Loading />
                : <Row className="d-flex min-vh-100 py-3 justify-content-center">
                  {animes.map((anime, idx) => {
                    return <AnimeCard key={ idx } data={ anime } />;
                  })}
                  </Row>
              }
            </Container>
        }
        </Route>
        <Route path="/anime/:id">
          <AnimeDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default Home
