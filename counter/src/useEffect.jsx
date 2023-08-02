import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    setCount(count + 1);
  };

  const decrement1 = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // This will run whenever the count state changes
    console.log('updated:', count);
  }, [count]); // The effect will only run when the count state changes

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment1}>Increment</button>
      <button onClick={decrement1}>Decrement</button>
    </div>
  );
};

export default Counter;
