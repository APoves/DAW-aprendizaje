import { LoginPage } from "./auth/pages/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useSelector } from 'react-redux';

export const AppRoutes = () => {

    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <Routes>
        { 
            isAuthenticated
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