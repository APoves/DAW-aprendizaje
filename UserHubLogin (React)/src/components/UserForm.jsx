import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ( { userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser } = useContext(UserContext);

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
                placeholder ="Nombre de usuario"
                name = "username"
                value = { username }
                onChange = { onInputChange } />

            { id > 0 || <input 
                className= "form-control my-3 w-75"
                placeholder ="Contraseña"
                type = "password"
                name = "password"
                value = { password }
                onChange = { onInputChange } />}

            <input 
                className= "form-control my-3 w-75"
                placeholder ="Correo electrónico"
                name = "email" 
                value = { email }
                onChange = { onInputChange } />

            <input type = "hidden"
                name = "id"
                value = {id} />
                <button
                className = "btn btn-success"
                type= "Submit">
                    { id > 0 ? 'Editar usuario' : 'Crear usuario' }
                </button>

                { !handlerCloseForm || <button
                        className = "btn btn-secondary mx-3"
                        type = "button"
                        onClick = { () => onCloseForm()}>
                            Cerrar formulario
                    </button>
                }
            </form>
    )
}