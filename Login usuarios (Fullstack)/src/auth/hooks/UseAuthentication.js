import { useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import Swal from "sweetalert2"
import { loginUser } from "../services/authServices"
import { useNavigate } from "react-router-dom"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) ||  {
    isAuthenticated: false,
    isAdmin: false,
    user: undefined,
}

export const useAuthentication = () => {

    const [ login, dispatch ] = useReducer(loginReducer, initialLogin);

    const navigate = useNavigate();

    const handlerLogin = async ({ username, password }) => {
        
        try{
            const response = await loginUser({ username, password });
            
            const token = response.data.tojen;

            const claims = JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);

            const user = { username: claims.sub }
            dispatch({
                type: 'login',
                payload: user, isAdmin: claims.isAdmin,
                //Swal.fire('Login correcto.', 'Bienvenido al sistema', 'success');
            });
                sessionStorage.setItem('login', JSON.stringify({
                isAuthenticated: true,
                isAdmin: claims.isAdmin,
                user,
            }));
            sessionStorage.setItem('token','Bearer ${token}');
            navigate ('/users');
        } catch(error) {
            if(error.response?.status == 401) {
                Swal.fire('Error de autenticación', 'Nombre de usuario o password no válidos.', 'error');
            }else if(error.response?.status == 403) {
                Swal.fire('Error de autenticación', 'No tiene acceso al recurso o permisos.', 'error');
            } else {
                throw error;
            }
            
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}