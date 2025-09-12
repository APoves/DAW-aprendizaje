import { UserForm } from "./UserForm";

export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {

    return (
        <div className = "Abrir-modal animacion fadeIn">
            <div className = "modal" style = { { display : "block"}}  tabIndex = "-1">
                <div className = "modal-dialog" role= "document">
                    <div className = "modal-content">
                        <div className = "modal-header">
                            <h5 className = "modal-title">
                                { userSelected.id > 0 ? 'Editar usuario' : 'Crear Usuario' } Mod
                            </h5>
                        </div>
                        <div className = "modal-body">
                            <UserForm
                                initialUserForm = { initialUserForm }
                                userSelected = { userSelected }
                                handlerAddUser = { handlerAddUser }
                                handlerCloseForm = { handlerCloseForm }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}