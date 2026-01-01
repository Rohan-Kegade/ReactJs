import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red");

  const changeColor = (color) => {
    setColor(color);
  };

  const buttons = ["Red", "Green", "Blue", "Black", "Gray"];

  return (
    <>
      <div
        className="min-h-screen w-screen flex justify-center items-end p-5"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white gap-2 p-3 rounded item-center">
          {buttons.map((button) => (
            <Button
              key={button}
              color={button}
              handleColorChange={changeColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
