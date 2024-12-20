import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const initialCount = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
  