import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        title="This is 1st card"
        description="Discover cutting-edge design patterns."
        views="254"
      />
      <Card
        title="This is 2nd card"
        description="Discover UI components that elevate your digital experiences."
        views="24354"
      />
      <Card
        title="This is 3rd card"
        description="Discover cutting-edge design patterns and UI components that elevate your digital experiences."
        views="984"
      />
    </>
  );
}

export default App;
