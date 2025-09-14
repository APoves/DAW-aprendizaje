import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

export const UsersPage = () => {

    const { 
        users,
        visibleForm,
            
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
    } = useContext (UserContext);

    return (
        <>
            { !visibleForm || 
                <UserModalForm />
            }

            <div className = "container my-4">
                <h2>Users App</h2>
                <div className ="row">

                    <div className ="col">
                        { visibleForm || <button
                            className = "btn btn-primary my-2"
                            onClick = { handlerOpenForm } >
                                Nuevo usuario
                        </button>
                        }

                        {
                            users.length === 0
                            ? <div  className = "alert alert-warning"> No hay usuarios en el sistema. </div>
                            : <UsersList
                                handlerRemoveUser = { handlerRemoveUser }
                                handlerUserSelectedForm = { handlerUserSelectedForm }
                                users = { users } 
                                />
                        }
                    </div>

                </div>
            </div>
        </>
    );
}