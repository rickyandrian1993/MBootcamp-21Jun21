import React, { useEffect } from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import AnimeCard from '../components/AnimeCard'
import { Col,Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import { useDispatch, useSelector, } from 'react-redux';
import { getAnimes } from '../store/animes/action';

const Home = () => {
  const animes = useSelector((state) => state.animes.data);
  const error = useSelector((state) => state.animes.error);
  const loading = useSelector((state) => state.animes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
  }, [])

  return (
    <>
      <h1>List Animes</h1>
      {error != null 
        ? <Error error={ error } />
        : <Container fluid>
          {loading
            ? <Row className="min-vh-100 align-items-center">
                <Loading />
              </Row>
            : <Row className="justify-content-center">
              {animes.map((anime, idx) => {
                return <Col key={idx} align="center">
                  <AnimeCard data={ anime } />
                </Col>
              })}
              </Row>
          }
          </Container>
      }
    </>
  )
}

export default Home
