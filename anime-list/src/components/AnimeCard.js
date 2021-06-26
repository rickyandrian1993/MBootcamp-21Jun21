import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function AnimeCard(props) {
  const { data } = props;

  return (
    <div className="card shadow my-3 mx-3" style={{ width: '20rem' }}>
      <img src={data.image_url} className="rounded card-img-top" style={{ height: '25rem' }} alt="anime"/>
      <div className="card-body row" style={{ alignContent: 'space-between' }}>
        <h5 className="card-title text-center">{ data.title }</h5>
        <div>
          <span className="card-text">Rated: { data.rated }</span>
          <span className="card-text">Rating: { data.score }</span>
        </div>
        <Link to={`/anime/${ data.mal_id }`}>
          <Button className="btn btn-primary">Detail</Button>
        </Link>
      </div>
    </div>
  );
}

export default AnimeCard;