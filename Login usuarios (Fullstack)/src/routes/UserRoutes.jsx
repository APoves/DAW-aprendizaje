import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Navbar } from "../components/layout/Navbar"
import { useSelector } from "react-redux";

export const UserRoutes = () => {
    
    const { isAdmin } = useSelector(state => state.auth);

    return (
        <>
            <Navbar />      
            <Routes>
                <Route path = "users" element = { <UsersPage /> } />
                {!isAdmin || <>
                    <Route path = "users/register" element = { <RegisterPage /> } />
                    <Route path = "users/edit/:id" element = { <RegisterPage /> } />
                </>
                }

                <Route path = "/" element = { <Navigate to = "/users" /> } />
            </Routes>
        </>
    )
}