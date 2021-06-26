import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'

const AnimeDetail = () => {
  const { id }  = useParams();
  const [ animeDetail, setAnimeDetail ] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/anime/${ id }`)
    .then(response => response.json())
    .then(data => {
      setAnimeDetail(data);
      console.log(data);
    }, []);
  })
  
  return (
    <div>
      {/* <h1 className="text-center">{ animeDetail.title }</h1>
      <img src={ animeDetail.image_url } /> */}
      <p>{ JSON.stringify(animeDetail, null, 2) }</p>
    </div>
  )
}

export default AnimeDetail