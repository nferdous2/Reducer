import './App.css';
import Count from './Components/Count';
import { useReducer, useState } from 'react';
import Portal from './Components/Portal';

function App() {
  // const [users, setUser] = useState([])
  const [state, dispath] = useReducer()
  return (
    <div className="App">
      <Count />
      <Portal />
    </div>
  );
}

export default App;
