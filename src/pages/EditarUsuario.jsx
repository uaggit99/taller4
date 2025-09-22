import { useParams } from "react-router-dom";
import { FormEditUser } from "../componentes/FormEditUser";

export function EditarUsuario(){
const {id} =useParams();
     
    return(
        <>
        <main>
            <FormEditUser id={parseInt(id)}/>
        </main>
        
        </>
    )
}