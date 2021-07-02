const defaultValue = {
  data: [],
  error: null,
  loading: false,
}

export default function reducer(state = defaultValue, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.data,
      };
    case "SET_LOADING":
      return {
        ...state,
        error: action.data,
      };
    case "GET_ANIMES":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}