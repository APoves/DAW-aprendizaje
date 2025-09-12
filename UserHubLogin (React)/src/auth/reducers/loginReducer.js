
export const loginReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case 'login':
            return {
                isAuthenticated: true,
                user: action.payload,
            }
        case 'logout': 
            return {
                isAuthenticated: false,
            }
        default:
            return state;            
    }
}