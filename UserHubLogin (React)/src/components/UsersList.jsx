import { UserRow } from "./UserRow";

export const UsersList = ( { handlerUserSelectedForm, handlerRemoveUser, users = [] } ) => {
    return (
        <table 
            className = "table table-hover table-striped"
        >

            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map ( ({ id, username, email, password }) => (
                        <UserRow
                        key = { id }
                        id = { id }
                        username = { username }
                        email = { email }
                        password = { password }
                        handlerUserSelectedForm = { handlerUserSelectedForm}
                        handlerRemoveUser = { handlerRemoveUser } />
                    ))
                }
            </tbody>
        </table>
    )
}