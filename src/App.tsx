import React from "react";
import "./App.css";
import { Alert, Grid } from "@mui/material";
import TitleComponent from "./components/TitleComponent/TitleComponent";
import MainSelectorComponent from "./components/MainSelectorComponent/MainSelectorComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HorizontalRule from "./components/HorizontalRule/HorizontalRule";

function App() {
  return (
    <Grid id="main" container>
      <TitleComponent />
      <Alert severity="warning" style={{ textAlign: "left" }}>
        This version of Panopto Downloader is currently in development. Some features may not work
        as expected.
      </Alert>
      <MainSelectorComponent />
      <HorizontalRule />
      <FooterComponent />
    </Grid>
  );
}

export default App;
