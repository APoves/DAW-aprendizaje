
export const UserRow = ({ id, username, email }) => {

    return (
        <tr>
            <td> { id } </td>
            <td> { username } </td>
            <td> { email } </td>
            <td>
                <button
                    type = "button"  //Es button del tipo button porque queremos un botón con evento onClick. Si se quiere enviar, sería tipo submit. // 
                    className = "btn btn-secondary btn-sm"
                >
                    Update
                </button>
            </td>
            <td>
                <button
                    type = "button"  //Es button del tipo button porque queremos un botón con evento onClick. Si se quiere enviar, sería tipo submit. // 
                    className = "btn btn-danger btn-sm"
                >
                    Remove
                </button>
            </td>
        </tr>
    )
    
}