import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(++count);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(--count);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
}

export default App;
