import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { useAuthentication } from "../../auth/hooks/UseAuthentication";

export const UsersPage = () => {

    const { 
        users,
        visibleForm,
        handlerOpenForm,
        getUsers
    } = useUsers ();

    const { login } = useAuthentication();

    useEffect (() => {
        getUsers();
    }, []);

    return (
        <>
            { !visibleForm || 
                <UserModalForm />
            }

            <div className = "container my-4">
                <h2>Users App</h2>
                <div className ="row">

                    <div className ="col">
                        { (visibleForm || !login.isAdmin) || <button
                            className = "btn btn-primary my-2"
                            onClick = { handlerOpenForm } >
                                Nuevo usuario
                        </button>
                        }

                        {
                            users.length === 0 && !visibleForm
                            ? <div  className = "alert alert-warning"> No hay usuarios en el sistema. </div>
                            : <UsersList/>
                        }
                    </div>

                </div>
            </div>
        </>
    );
}