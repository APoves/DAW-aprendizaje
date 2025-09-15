import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const UserRow = ({ id, username, email }) => {

    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);

    return (
        <tr>
            <td> { id } </td>
            <td> { username } </td>
            <td> { email } </td>
            <td>
                <button
                    type = "button" 
                    className = "btn btn-secondary btn-sm"
                    onClick = { () => handlerUserSelectedForm({
                        id: id,
                        username: username,
                        email: email,
                    }) }
                >
                    Actualizar
                </button>
            </td>
            <td>
                <NavLink className = {'btn btn-secondary btn-sm'}
                    to = {'/users/edit/' + id}>
                    Actualizar ruta
                </NavLink>
            </td>
            <td>
                <button
                    type = "button"
                    className = "btn btn-danger btn-sm"
                    onClick = { () => handlerRemoveUser(id) }
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
    
}