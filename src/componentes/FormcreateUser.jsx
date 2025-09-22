import { useState } from "react"
import { useUsers } from "../hooks/useUsers";
import "../pages/EditarUsuario.css"

export function FormcreateUser(){

    const { users, setUsers } = useUsers();   

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [ciudad, setCiudad] = useState("");

    

    const crearUsuario=(e)=>{
        e.preventDefault();
    

        if (!nombre || !correo || !ciudad) {
        alert('Por favor, completa todos los campos.');
        return;
        }

    const nuevoUsuario = {
        
    id: Date.now().valueOf,
    nombre: nombre,
    correo: correo,
    ciudad: ciudad
    };
    setUsers([...users, nuevoUsuario]);
    setNombre("");
    setCorreo("");
    setCiudad("");
    }

    return(
        <>
        <h2>Formulario Crear usuario</h2>
        <form  action="GET"  lassName="formulario" onSubmit={crearUsuario}>
            <label htmlFor="nombre">Nombre  </label>
            <input type="text" id="nombre"  placeholder="Ingrese su nombre"  value={nombre}  onChange={(event)=> setNombre(event.target.value)} /><b></b><br></br>
            <label htmlFor="correo">Email   </label>
            <input type="email" id="correo"  placeholder="Ingrese su Email" value={correo} onChange={(event)=>setCorreo(event.target.value)}/><b></b><br></br>
            <label htmlFor="ciudad">Ciudad  </label>
            <input type="text" id="ciudad"  placeholder="Ingrese ciudad"  value={ciudad}  onChange={(event)=>setCiudad(event.target.value)} /><b></b><br></br>
            <button type="submit">Crear Usuario</button>
        </form>
               
        </>
    )
}