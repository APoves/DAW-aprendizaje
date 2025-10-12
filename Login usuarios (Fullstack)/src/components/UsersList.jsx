import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersList = () => {
    
    const { users } = useContext(UserContext); 
    const { login } = useContext(AuthContext);
    
    return (
        <table 
            className = "table table-hover table-striped"
        >

            <thead>
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Correo electrónico</th>
                    { !login.isAdmin || <>
                        <th>Actualizar</th>
                        <th>Actualizar ruta</th>
                        <th>Eliminar</th>
                    </>}
                </tr>
            </thead>

            <tbody>
                {
                    users.map ( ({ id, username, email, admin }) => (
                        <UserRow
                            key = { id }
                            id = { id }
                            username = { username }
                            email = { email }
                            admin = {admin}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}