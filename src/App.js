import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import LandingPage from "./Component/LandingPage";
function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
