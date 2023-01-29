import React from "react";
import { Provider } from "react-redux";
import "App.css";
import configureAppStore from "./state";
import MainViewContainer from "containers/mainViewContainer";
const initialState = (window as any).initialReduxState;
const store = configureAppStore(initialState);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainViewContainer />
    </Provider>
  );
};

export default App;
