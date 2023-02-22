import React from "react";
import { Provider } from "react-redux";
import "App.css";
import configureAppStore from "state";
import MainViewContainer from "containers/mainViewContainer";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
const initialState = (window as any).initialReduxState;
const store = configureAppStore(initialState);
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <MainViewContainer />
      </Provider>
    </>
  );
};

export default withAuthenticator(App);
