import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Nav />
      <h1>Bonjour</h1>
      <Outlet />
    </>
  );
}

export default App;
