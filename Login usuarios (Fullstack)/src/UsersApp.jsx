import { useContext } from 'react'
import { AuthContext } from './auth/context/AuthContext'
import { LoginPage } from "./auth/pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

export const UsersApp = () => {

    const { login } = useContext(AuthContext);

    return (
        <Routes>
        { 
            login.isAuthenticated
                ? (
                    <Route path = '/*' element = { <UserRoutes /> } />
                )
                : <>
                    <Route path = '/login' element = { <LoginPage />} />
                    <Route path = '/*' element = { <Navigate to = "/login" /> } />
                </>            
        }
        </Routes>
    );
}