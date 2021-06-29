import React from "react";
import { useSelector } from "react-redux";

function Favorite() {
  const favs = useSelector((state) => state);
  console.log(favs);
  return(
    <div>
      <h1>Favorite Animes</h1>
    </div>
  );
}

export default Favorite;