import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './actions/index'


function App() {
  // here you use the state with useSelector
  const counter = useSelector(state => state.counter)
  // here you dispatch the function you created in actions
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button> 
    </div>
  );
}

export default App;
