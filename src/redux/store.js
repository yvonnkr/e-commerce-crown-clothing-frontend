import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

// const middlewares = [thunk, logger];
const middlewares = [thunk];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, devTools);

export default store;
