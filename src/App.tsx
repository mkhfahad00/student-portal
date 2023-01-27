import React from "react";
import { Provider } from "react-redux";
import "App.css";
import configureAppStore from "./state";
import StudentsListContainer from "containers/studentsListContainer";
const initialState = (window as any).initialReduxState;
const store = configureAppStore(initialState);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StudentsListContainer />
    </Provider>
  );
};

export default App;
