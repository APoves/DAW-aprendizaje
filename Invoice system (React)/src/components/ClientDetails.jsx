export const ClientDetails = ({title, client}) => {

    const { name: nameClient, lastName, address} = client;
    const { country, city, street, number, postalCode } = address;

    return(
        <>
        <h5>{ title }</h5>
        <ul className="list-group">
            <li className="list-group-item list-group-item-primary">{ nameClient } { lastName }</li>                
            <li className="list-group-item">{ city } / { country }</li>
            <li className="list-group-item">{ street }, { number } </li>
            <li className="list-group-item">{ postalCode }</li>
        </ul>
        </>
    )

}