export function addFavorite(favorite) {
  return {
    type: "ADD_FAVORITE",
    payload: favorite,
  }
}