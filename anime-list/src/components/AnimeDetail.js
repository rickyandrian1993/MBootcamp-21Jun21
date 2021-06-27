import Error from '../components/Error'
import Loading from '../components/Loading'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetctAnimeDetail from '../services/hooks/useFetchAnimeDetail'

const AnimeDetail = () => {
  const { id }  = useParams();
  const { datas: anime, loading, error } = useFetctAnimeDetail(id);

  return (
    <Container className="my-3">
      <Row>
      {error != null 
          ? <Error error={ error } />
          : <Container fluid>
            {loading
              ? <Row className="min-vh-100 align-items-center">
                  <Loading />
                </Row>
              : <Row>
                  <h1 className="text-center">{ anime.title }</h1>
                  <Col md={3}>
                    <img className="rounded" src={ anime.image_url } alt="imgAlt" />
                  </Col>
                  <Col>
                    <h2>Score: { anime.score }</h2>
                    <p className="text-muted">{ anime.scored_by } users</p>
                    <h2>{ anime.rating }</h2>
                    <p>{ anime.synopsis }</p>
                  </Col>
                </Row>
            }
            </Container>
        }
      </Row>
    </Container>
  )
}

export default AnimeDetail