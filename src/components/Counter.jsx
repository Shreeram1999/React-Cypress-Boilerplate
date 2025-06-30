import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-cy="counter-component">
      <h1 data-cy="count-value">Count: {count}</h1>
      <button data-cy="increment-btn" onClick={() => setCount(count + 1)}>Increment</button>
      <button data-cy="decrement-btn" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
