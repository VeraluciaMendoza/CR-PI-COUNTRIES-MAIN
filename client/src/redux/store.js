// 1. Almacenamos el estado
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer'
// import { composeWithDevTools } from 'redux'

// export const store = createStore(rootReducer, )

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
);