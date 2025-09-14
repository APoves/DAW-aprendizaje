import { UserForm } from "../components/UserForm"
import { useState } from "react"

export const RegisterPage = ({ handlerAddUser, initialUserForm }) => {

    const [ userSelected, setUserSelecter] = useState(initialUserForm);

    return (
        <div className = "container my-4">
            <h4>Registro de usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm
                        userSelecter = { userSelected }
                        handlerAddUser = { handlerAddUser }
                        initialUserForm = { initialUserForm } />
                </div>
            </div>
        </div>
    )
}