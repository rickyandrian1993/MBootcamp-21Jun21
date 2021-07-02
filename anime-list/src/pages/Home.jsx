import React, { useEffect, useState } from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import AnimeCard from '../components/AnimeCard'
import useFetctAnimes from '../services/hooks/useFetchAnimes'
import { Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import { useDispatch, useSelector, } from 'react-redux';
import { getAnimes } from '../store/animes/action';

const Home = () => {
  // const { datas: animes, error, loading } = useFetctAnimes();
  const animes = useSelector((state) => state.animes.data);
  const error = useSelector((state) => state.animes.error);
  const loading = useSelector((state) => state.animes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
  }, [])

  return (
    <>
      <h1>Ini Home</h1>
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
