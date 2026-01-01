import React from "react";
import Header from "./Header";

const myElement = {
  type: "p",
  Children: "This is a custom react component",
  props: {
    style: "color:red",
  },
};

const myElementHTML = (
  <p style={{ color: "red" }}>This is a custom react component</p>
);

const myReactElement = React.createElement(
  "p",
  { style: { color: "red" } },
  "This is a custom react component"
);

function App() {
  return (
    // <>
    //   <Header />
    //   <h1>This is vite app</h1>
    // </>

    // Header()       // we call a function to render

    // myElementHTML    // we can place a html component directly to render

    // myElement // we cannot render our component directly as it is not created with format in which React expects

    myReactElement // create your component using react createElement method to render
  );
}

export default App;
