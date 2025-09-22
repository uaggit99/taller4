import { useState } from 'react';
import dataJson from '../assert/usuario.json'
import { UserContext } from '../contexts/UserContext'
//import { useLocalStorage } from '../hooks/useLocalStorage';





export const  UsersProvider=({children})=>{

    const[users, setUsers]=useState( dataJson);
    return(
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )

}