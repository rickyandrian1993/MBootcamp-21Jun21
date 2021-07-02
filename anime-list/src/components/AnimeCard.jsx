import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { addFavorite, removeFavorite } from '../store/animes/action';

function AnimeCard(props) {
  const { data } = props;
  const favorites = useSelector((state) => state.animes.favorites);
  const dispatch = useDispatch();
  
  function handleFavorite(id) {
    if(favorites.find((element) => element === id))
      dispatch(removeFavorite(data.mal_id));
    else
      dispatch(addFavorite(data.mal_id));
  }
  
  function checkFavorite(id) {
    if(favorites.find((element) => element === id))
      return true;
    return false;
  }

  return (
    <div className="card shadow my-3 mx-3" style={{ width: '20rem', height: '530px' }}>
      <img src={data.image_url} className="rounded card-img-top" style={{ height: '25rem' }} alt="anime"/>
      <div className="card-body row" style={{ alignContent: 'space-between' }}>
        <h5 className="card-title text-center">{ data.title }</h5>
        <div className="d-flex justify-content-between">
          <Link to={`/anime/${ data.mal_id }`}>
            <Button className="btn btn-primary">Detail</Button>
          </Link>
          <div className="multi-button">
            <Button className="btn btn-info" onClick={() => handleFavorite(data.mal_id)}>
              <FontAwesomeIcon style={{ color: checkFavorite(data.mal_id) ? 'red' : undefined }} icon={faHeart} inverse />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;