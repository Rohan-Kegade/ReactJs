import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
import { ThemeContextProvider } from "./context/ThemeContextProvider.jsx";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Navbar/>
        <h1>This is context api</h1>
        <Card/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
