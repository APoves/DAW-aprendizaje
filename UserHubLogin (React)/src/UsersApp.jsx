
import { LoginPage } from "./auth/pages/LoginPage";
import { useAuthentication } from "./auth/hooks/UseAuthentication";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuthentication();

    return (
        <Routes>
        { 
            login.isAuthenticated
                ? (
                    <Route path = '/*' element = { <UserRoutes 
                        login = { login }
                        handlerLogout = { handlerLogout }
                    /> } />
                )
                : <>
                    <Route path = '/login' 
                    element = { <LoginPage 
                    handlerLogin = { handlerLogin } />} />
                    <Route path = '/*' element = { <Navigate to = "/login" /> } />
                </>            
        }
        </Routes>
    );
}