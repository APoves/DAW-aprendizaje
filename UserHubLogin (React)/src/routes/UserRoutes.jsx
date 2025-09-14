import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"

export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            <UserProvider>
                <Navbar login = { login } handlerLogout = { handlerLogout }/>      
                <Routes>
                    <Route path = "users" element = { <UsersPage /> } />

                    <Route path = "users/register" element = { <RegisterPage /> } />

                    <Route path = "users/edit/:id" element = { <RegisterPage /> } />
                    
                    <Route path = "/" element = { <Navigate to = "/users" /> } />
                </Routes>
            </UserProvider>
        </>
    )
}