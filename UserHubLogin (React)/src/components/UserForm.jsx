import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const UserForm = ( { userSelected, handlerAddUser, initialUserForm, handlerCloseForm }) => {

    const [ userForm, setUserForm ] = useState (initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect ( () => {
        setUserForm ( {
            ...userSelected,
            password: '',
        } );
    }, [userSelected]);

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
        if( !username || ( !password && id === 0 ) || !email ) {
            Swal.fire(
                'Error',
                'Los campos del formulario deben estar rellenos.',
                'error'
            );
            
            return;
        }
        if(!email.includes('@')){
            Swal.fire(
                'Error',
                'Debe ser un correo electrónico válido.',
                'error'
            );
            
            return;
        }

        //console.log(userForm)
        
        //Para guardar el formulario de usuario en el listado de usuarios.
        handlerAddUser (userForm);
        setUserForm(initialUserForm);
    }
    
    const onCloseForm = () => {
        handlerCloseForm();
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

            { id > 0 || <input 
                className= "form-control my-3 w-75"
                placeholder ="Password"
                type = "password"
                name = "password"
                value = { password }
                onChange = { onInputChange } />}

            <input 
                className= "form-control my-3 w-75"
                placeholder ="Email"
                name = "email" 
                value = { email }
                onChange = { onInputChange } />

            <input type = "hidden"
                name = "id"
                value = {id} />
                <button
                className = "btn btn-primary"
                type= "Submit">
                    { id > 0 ? 'Editar usuario' : 'Crear usuario' }
                </button>

                { !handlerCloseForm || <button
                        className = "btn btn-primary mx-2"
                        type = "button"
                        onClick = { () => onCloseForm()}>
                            Cerrar formulario
                    </button>
                }
            </form>
    )
}