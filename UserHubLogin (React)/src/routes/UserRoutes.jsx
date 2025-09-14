import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Navbar } from "../components/layout/Navbar"   // ⬅️ Faltaba esto

export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            <Navbar login = { login } handlerLogout = { handlerLogout }/>      
            <Routes>
                <Route path = "users" element = { <UsersPage /> } />
                <Route path = "users/register" element = { <RegisterPage
                    handlerAddUser = { handlerAddUser }
                    initialUserForm = { initialUserForm } /> } />
                <Route path = "/" element = { <Navigate to = "/users" /> } />
            </Routes>
        </>
    )
}