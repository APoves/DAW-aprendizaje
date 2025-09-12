import { UserModalForm } from "./components/UserModalForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <>
            { !visibleForm || 
                <UserModalForm
                    userSelected = { userSelected } 
                    initialUserForm = { initialUserForm }
                    handlerAddUser = { handlerAddUser }
                    handlerCloseForm = { handlerCloseForm }
                />
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