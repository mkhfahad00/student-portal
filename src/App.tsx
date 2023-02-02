import React from "react";
import { Provider } from "react-redux";
import "App.css";
import configureAppStore from "state";
import MainViewContainer from "containers/mainViewContainer";
import { StyledEngineProvider } from "@mui/material/styles";

const initialState = (window as any).initialReduxState;
const store = configureAppStore(initialState);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <MainViewContainer />
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
