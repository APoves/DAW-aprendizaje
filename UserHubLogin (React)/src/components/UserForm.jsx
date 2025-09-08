import { useState } from "react";


const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = ( { handlerAddUser }) => {

    const [ userForm, setUserForm ] = useState (initialUserForm);

    const { username, password, email } = userForm;

    const onInputChange = ({target })=> {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm ({
            ...userForm,
            [ name ] : value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Para evitar que cuando se envíe el formulario no se recargue la página //
        if( !username || !password || !email ) {
            alert('Los campos del formulario deben estar rellenos');
            return;
        }
        //console.log(userForm)
        
        //Para guardar el formulario de usuario en el listado de usuarios.
        handlerAddUser ( userForm);
        setUserForm(initialUserForm);
    }
    
    return (

            <form onSubmit = { onSubmit } >
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