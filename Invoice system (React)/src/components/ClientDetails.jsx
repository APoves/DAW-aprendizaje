import PropTypes from 'prop-types';
export const ClientDetails = ({title, client}) => {

    const { name: nameClient,
        lastName,
        address: {
            country,
            city,
            street,
            number,
            postalCode }
        } = client;
        
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

ClientDetails.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes. object.isRequired,
}