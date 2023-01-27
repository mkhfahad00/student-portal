import { Store } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "./ducks/index";
import sagaMiddleware from "state/middleware/saga";
import { configureStore } from "@reduxjs/toolkit";

export default function configureAppStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: true,
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
