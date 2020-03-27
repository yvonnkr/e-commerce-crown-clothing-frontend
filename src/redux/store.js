import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, devTools);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
