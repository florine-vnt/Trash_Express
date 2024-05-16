import { Outlet } from "react-router-dom";


// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
        <h1>Bonjour</h1>
        <Outlet />
      
    </>
  );
}

export default App;
