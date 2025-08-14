import PropTypes from 'prop-types';
export const RowItemDetails = ({ id, product, price, quantity, handlerDeleteItem }) => {

    return(
        <>
            <tr>
                <td>{ product }</td>
                <td>{ price }</td>
                <td>{ quantity }</td>
                <td><button
                className = 'btn btn-danger'
                onClick= {() => handlerDeleteItem(id)}>eliminar</button></td>
            </tr>
        </>
    )
}

RowItemDetails.PropTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}