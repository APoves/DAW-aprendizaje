import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";


export const UsersList = () => {
    
    const { users } = useContext(UserContext); 
    
    return (
        <table 
            className = "table table-hover table-striped"
        >

            <thead>
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Correo electrónico</th>
                    <th>Actualizar</th>
                    <th>Actualizar ruta</th>
                    <th>Eliminar</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map ( ({ id, username, email }) => (
                        <UserRow
                        key = { id }
                        id = { id }
                        username = { username }
                        email = { email } />
                    ))
                }
            </tbody>
        </table>
    )
}