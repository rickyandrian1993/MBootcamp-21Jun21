import React from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import AnimeCard from '../components/AnimeCard'
import useFetctAnimes from '../services/hooks/useFetchAnimes'
import { Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const { datas: animes, error, loading } = useFetctAnimes();

  return (
    <>
      {error != null 
        ? <Error error={ error } />
        : <Container fluid>
          {loading
            ? <Row className="min-vh-100 align-items-center">
                <Loading />
              </Row>
            : <Row className="justify-content-center">
              {animes.map((anime, idx) => {
                return <AnimeCard key={ idx } data={ anime } />;
              })}
              </Row>
          }
          </Container>
      }
    </>
  )
}

export default Home
