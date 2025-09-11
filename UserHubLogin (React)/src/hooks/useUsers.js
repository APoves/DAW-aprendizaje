import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'Aurora',
        password: '12345',
        email: 'aurora@correo.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [ users, dispatch ] = useReducer (usersReducer, initialUsers);

    const [ userSelected, setUserSelected ] = useState(initialUserForm);

    const handlerAddUser = ( user) => {
        // console.log(user);
        let type;

        if (user.id === 0 ) {
            type = 'addUser';
        } else {
            type = 'updateUser';
        }

        dispatch ({
            type: type,
            payload: user, 
            });

        Swal.fire(
            (user.id === 0 ) ?
                'Usuario creado':
                'Usuario actualizado',
            (user.id === 0 ) ?
                'El usuario ha sido creado correctamente.':
                'El usuario ha sido actualizado correctamente.',
            'success'
        );
    }

    const handlerRemoveUser = (id) => {
        //console.log(id);

        Swal.fire({
            title: '¿Seguro que desea eliminar el usuario?',
            text: 'Cuidado, el usuario será eliminado permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar usuario'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch ( {
                    type: 'removeUser',
                    payload: id,
                });
                
                Swal.fire(
                'Usuario eliminado',
                'El usuario ha sido eliminado correctamente.',
                'success'
                )
            }
        })
    }

    const handlerUserSelectedForm = ( user ) => {
        // console.log(user)
        setUserSelected ( {...user} );
    }

    return {
        users,
        userSelected,
        initialUserForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    }
}