import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import chartsReducer from "../redux/reducers/chartsReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      __INIT_REDUX_STORE__: any;
    }
  }
}

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = (x: any) => x;

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create() {
  let middleware: any[] = [];

  // if (
  //   process.env.NODE_ENV !== "production" &&
  //   process.browser &&
  //   !window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   // redux-logger needs this feature
  //   Object["assign"] // eslint-disable-line dot-notation
  // ) {
  //   // eslint-disable-next-line global-require
  //   const createLogger = require("redux-logger").createLogger;

  //   middleware = [...middleware, createLogger()];
  // }

  const createLogger = require("redux-logger").createLogger;

  middleware = [...middleware, createLogger()];

  return createStore(
    combineReducers({
      charts: chartsReducer
    }),
    // initialState, // Hydrate the store with server-side data
    compose(
      applyMiddleware(...middleware),
      devtools
    )
  );
}

export default function initRedux() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create();
  }

  // Reuse store on the client-side
  if (!global.__INIT_REDUX_STORE__) {
    global.__INIT_REDUX_STORE__ = create();
  }

  return global.__INIT_REDUX_STORE__;
}
