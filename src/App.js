import React from "react";
import "./App.css";
import Container from "./components/Container";
import { ApiProvider } from "./components/ApiContext";

const App = () => {
  return (
    <ApiProvider>
      
        <Container />
     
    </ApiProvider>
  );
};

export default App;
