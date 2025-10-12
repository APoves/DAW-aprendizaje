
export const loginReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case 'login':
            return {
                isAuthenticated: true,
                isAdmin: action.payload.isAdmin,
            
                user: action.payload.user,
            }
        case 'logout': 
            return {
                isAuthenticated: false,
                isAdmin: false,
                user: undefined,
            }
        default:
            return state;            
    }
}