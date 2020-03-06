import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'


function App() {
  // here you use the state with useSelector
  const counter = useSelector(state => state.counter)
  // here you dispatch the function you created in actions
  const dispatch = useDispatch()
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
