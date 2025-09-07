import { useState } from "react";


const initialUSerForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = () => {

    const [ userForm, setUserForm ] = useState (initialUSerForm);

    const { username, password, email } = userForm;

    const onInputChange = ({target })=> {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm ({
            ...userForm,
            [ name ] : value,
        })
    }
    
    return (

            <form>
                <input 
                className= "form-control my-3 w-75"
                placeholder ="Username"
                name = "username"
                value = { username }
                onChange = { onInputChange } />
                <input 
                className= "form-control my-3 w-75"
                placeholder ="Password"
                type = "password"
                name = "password"
                value = { password }
                onChange = { onInputChange } />
                <input 
                className= "form-control my-3 w-75"
                placeholder ="Email"
                name = "email" 
                value = { email }
                onChange = { onInputChange } />
                <button
                className = "btn btn-primary"
                type= "Submit">
                    Crear usuario
                </button>
            </form>


    )
}