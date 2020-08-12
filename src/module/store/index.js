import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSaga from "redux-saga";
import rootSaga from "../saga";

const saga = createSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
