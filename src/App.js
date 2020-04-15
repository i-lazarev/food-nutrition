import React from 'react';
import './App.css';
import Container from './Components/Container';
import { RecipeProvider } from './Components/ContextAPI'

function App() {

  return (
    <RecipeProvider>
      <div className="App">
        <Container/>
      </div>
    </RecipeProvider>
  );
}

export default App;
