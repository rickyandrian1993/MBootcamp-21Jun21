import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import animes from "./animes/reducer";
import logger from '../middlewares/logger';

const store = createStore(
  combineReducers({
    animes,
  }), 
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;