import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import LandingScreen from "Components1";
import { Box } from "@mui/material";
import NestedSplit from "Component/NestefSplitter";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="splits">
          <LandingScreen />
        </div>
      </div>
    </Provider>
  );
}

// export default connect(mapStateToProps)(App);
export default App;
