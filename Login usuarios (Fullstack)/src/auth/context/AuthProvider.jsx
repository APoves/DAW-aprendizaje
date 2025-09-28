import { useAuthentication } from "../hooks/UseAuthentication";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }) => {

    const { login, handlerLogin, handlerLogout } = useAuthentication();
    
    
    return(
        <AuthContext.Provider value = {
            {
                login,
                handlerLogin,
                handlerLogout,
            }

        }>
            { children }
        </AuthContext.Provider>
    )
}