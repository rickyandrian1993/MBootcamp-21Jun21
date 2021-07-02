import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function AnimeCard(props) {
  const { data } = props;
  const dispatch = useDispatch();

  function handleFavorite() {
    // dispatch(addFavorite(data));
    // console.log(data.title);
  }

  return (
    <div className="card shadow my-3 mx-3" style={{ width: '20rem' }}>
      <img src={data.image_url} className="rounded card-img-top" style={{ height: '25rem' }} alt="anime"/>
      <div className="card-body row" style={{ alignContent: 'space-between' }}>
        <h5 className="card-title text-center">{ data.title }</h5>
        <div className="d-flex justify-content-between">
          <Link to={`/anime/${ data.mal_id }`}>
            <Button className="btn btn-primary">Detail</Button>
          </Link>
          <Button className="btn btn-danger" onClick={handleFavorite}>Favorite</Button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;