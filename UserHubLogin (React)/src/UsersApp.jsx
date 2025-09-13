
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuthentication } from "./auth/hooks/UseAuthentication";

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuthentication();

    return (
        <>
        { login.isAuthenticated
            ? (
                <>  
                    <Navbar login = { login } handlerLogout = { handlerLogout }/>      
                    <UsersPage />
                </>
            )
            : <LoginPage handlerLogin = { handlerLogin } />            
        }
        </>
    );
}