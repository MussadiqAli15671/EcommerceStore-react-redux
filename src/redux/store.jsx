import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

// const store = configureStore({
//     reducer: reducers,
//     devTools: process.env.NODE_ENV !== 'production',
//   });

// const store = createStoreHook(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;