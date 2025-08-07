import PropTypes from 'prop-types';
export const RowItemDetails = ({ product, price, quantity }) => {

    return(
        <>
            <tr>
                <td>{ product }</td>
                <td>{ price }</td>
                <td>{ quantity }</td>
            </tr>
        </>
    )
}

RowItemDetails.PropTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}