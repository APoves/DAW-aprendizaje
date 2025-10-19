import { NavLink } from "react-router-dom";
import { useUsers } from "..hooks/useUsers";
import { useAuthentication } from "../auth/hooks/UseAuthentication";


export const UserRow = ({ id, username, email, admin }) => {

    const { handlerUserSelectedForm, handlerRemoveUser } = useUsers();

    const { login } = useAuthentication();

    return (
        <tr>
            <td> { id } </td>
            <td> { username } </td>
            <td> { email } </td>

            { !login.isAdmin ||<>    
                <td>
                    <button
                        type = "button" 
                        className = "btn btn-secondary btn-sm"
                        onClick = { () => handlerUserSelectedForm({
                            id,
                            username,
                            email,
                            admin
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
            </>}
        </tr>
    )
    
}