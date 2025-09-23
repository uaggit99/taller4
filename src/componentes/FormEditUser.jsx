import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import "../pages/EditarUsuario.css"

export function FormEditUser({id}) {
  const { users, setUsers } = useUsers();
  

  const user = users.find((usuario) => usuario.id === id);
  console.log(typeof(user))

  const [nombre, setNombre] = useState(user?.nombre);
  const [correo, setCorreo] = useState(user?.correo);
  const [ciudad, setCiudad] = useState(user?.ciudad);
  console.log(nombre)

  if(!user){
    return alert("Usuario No existe")
  }

   const editarUsuario=(e)=>{
        e.preventDefault();         

    const nuevoUsuario = {
    id: id,
    nombre: nombre,
    correo: correo,
    ciudad: ciudad
    };
    const filterUsuario = users.filter((usuario)=> usuario.id !== id)

    setUsers([...filterUsuario, nuevoUsuario]);
    setNombre("");
    setCorreo("");
    setCiudad("");
    }

  return (
    <>
    <main>
      <h2>Formulario Modificacion usuario</h2>
      <form action="GET" lassName="formulario" onSubmit={editarUsuario}>
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <b></b>
        <br></br>
        <label htmlFor="correo">Email </label>
        <input
          type="email"
          id="correo"
          placeholder="Ingrese su Email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
        <b></b>
        <br></br>
        <label htmlFor="ciudad">Ciudad </label>
        <input
          type="text"
          id="ciudad"
          placeholder="Ingrese ciudad"
          value={ciudad}
          onChange={(event) => setCiudad(event.target.value)}
        />
        <b></b>
        <br></br>
        <button type="submit">Guardar Usuario</button>
      </form>
      </main>
    </>
  );
}
