import { useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import Swal from "sweetalert2"
import { loginUser } from "../services/authServices"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) ||  {
    isAuthenticated: false,
    user: undefined,
}

export const useAuthentication = () => {

    const [ login, dispatch ] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser({ username, password });
        
        if (isLogin){
            const user = { username: 'admin' }
            dispatch({
                type: 'login',
                payload: user,
                //Swal.fire('Login correcto.', 'Bienvenido al sistema', 'success');
            });
                sessionStorage.setItem('login', JSON.stringify({
                isAuthenticated: true,
                user,
            }));
            

        } else {
            Swal.fire('Error de autenticación', 'Nombre de usuario o password no válido.', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}