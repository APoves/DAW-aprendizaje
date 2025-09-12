import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginReducer } from "./auth/reducers/loginReducer";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";

const initialLogin = {
        isAuthenticated: false,
        user: undefined
    }

export const UsersApp = () => {

    const [ login, dispatch ] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {
        if(username === 'admin' && password === '12345') {
            const user = { username: 'admin' }
            dispatch({
                type: 'login',
                payload: user,
                //Swal.fire('Login correcto.', 'Bienvenido al sistema', 'success');
            });
        } else {
            Swal.fire('Error de autenticación', 'Nombre de usuario o password no válido.', 'error');
        }
    }

    return (
        <>
        { login.isAuthenticated
            ? <UsersPage />
            : <LoginPage handlerLogin = { handlerLogin} />            
        }
        </>
    );
}