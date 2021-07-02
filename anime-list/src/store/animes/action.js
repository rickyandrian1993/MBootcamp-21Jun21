import axios from 'axios';

export const getAnimes = () => {
  return (dispatch) => {
    dispatch({type: "SET_LOADING", data: true});
    return new Promise((resolve, reject) => {
      axios.get('https://api.jikan.moe/v3/search/anime?q=anime&limit=20')
        .then(({ data }) => {
          dispatch({
            type: "GET_ANIMES",
            data: data.results,
          });
          dispatch({type: "SET_LOADING", data: false});
        }).catch(err => {
          dispatch({type: "CATCH_ERROR", data: err})
        });
    });
  }
}

export function addFavorite(id) {
  return {
    type: "ADD_FAVORITE",
    data: id,
  }
}

export function removeFavorite(id) {
  return {
    type: "REMOVE_FAVORITE",
    data: id,
  }
}