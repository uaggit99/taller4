import { useUsers } from "../hooks/useUsers";
import { NavLink } from "react-router-dom";
import "../pages/Home.css"

export const UserList = () => {
  const { users, setUsers } = useUsers();

  function deleteUser(id) {
    const confirmation = window.confirm(
      "¿Estás seguro de eliminar este usuario?"
    );
    if (confirmation) {
      setUsers(users.filter((user) => user.id !== id)); // Filtrar el usuario a eliminar
    }
  }

  return (
    <>
      
        <h2>LISTA DE CLIENTES</h2>

        <div className="container">
          {users.map((usuario) => (
            <div key={usuario.id} className="container-cliente">
              <p>Nombre: {usuario.nombre}</p>
              <p>Email : {usuario.correo}</p>
              <p>Ciudad: {usuario.ciudad}</p>

              <NavLink
                to={`/user/edit/:${usuario.id}`}               
              >
              <button>Editar</button>
              </NavLink>
              <button on onClick={() => deleteUser(usuario.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      
    </>
  );
};
