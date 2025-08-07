import PropTypes from 'prop-types';
export const CompanyDetails = ({ title, company }) => {
    
    return (
        <>
        <h5>{ title }</h5>
        <ul className="list-group">
            <li className="list-group-item list-group-item-primary"> { company.name }</li>
            <li className="list-group-item"> { company.fiscalNumber }</li>
        </ul>
        </>
    )
}

CompanyDetails.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
}