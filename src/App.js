import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import LandingPage from "./Component/LandingPage";
import { Box } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <LandingPage />
      </Box>
    </Provider>
  );
}

export default App;
