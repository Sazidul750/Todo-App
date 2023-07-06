import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount((count) => 0);
  };
  return (
    <div>
      <h1>Counter-App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement} disabled={count === 5 ? true : false}>
        +
      </button>
      <button onClick={handleDecrement} disabled={count === -5 ? true : false}>
        -
      </button>
      <button onClick={handleReset}>0</button>
    </div>
  );
}
