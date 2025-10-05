import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [ users, dispatch ] = useReducer (usersReducer, initialUsers);

    const [ userSelected, setUserSelected ] = useState(initialUserForm);

    const [ visibleForm, setVisibleForm ] = useState(false);

    const [errors, setErrors] = useState({initialUserForm});

    const navigate = useNavigate();

    const getUsers = async() => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });
    }

    const handlerAddUser = async(user) => {

    let response;

    try{
        if(user.id === 0 ) {
            response = await save(user);
        }else {
            response = await update(user);
        }

            dispatch ({
                type: (user.id === 0 ) ? 'addUser' : 'updateUser',
                payload: response.data, 
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

            handlerCloseForm();
            navigate ('/users');
        }catch (error){
            if(error.response && error.response.status == 400) {
                setErrors(error.response.data);
            } else {
                throw error;
            }
        }
    }


    const handlerRemoveUser = (id) => {
        //console.log(id);

        Swal.fire({
            title: '¿Seguro que desea eliminar el usuario?',
            text: 'El usuario será eliminado permanentemente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar usuario',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
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
        setVisibleForm(true);
        setUserSelected ( {...user} );
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
        setErrors({});
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}