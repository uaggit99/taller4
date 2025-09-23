import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <header>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/crear"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Crear Usuario
        </NavLink>
        <NavLink
          to="/user/edit/:id"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Edicion
        </NavLink>
      </nav>
      </header>
    </>
  );
}
export default Navbar;
