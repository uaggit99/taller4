import "./App.css";
import Navbar from "./componentes/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CrearUsers } from "./pages/CrearUsers";
import { EditarUsuario } from "./pages/EditarUsuario";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/crear" element={<CrearUsers />} />
        <Route exact path="/user/edit/:id" element={<EditarUsuario />} />
      </Routes>
    </>
  );
}

export default App;
