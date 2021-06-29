const initialData = {
  favorite: ['naruto']
}

function reducer(state = initialData, action) {
  if(action.type === "ADD_FAVORITE") {
    return {
      ...state,
      favorite: action.payload,
    };
  }
  console.log(state, 'state baru');
  return state;
}

export default reducer;