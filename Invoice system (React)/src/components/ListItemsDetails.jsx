import { RowItemDetails } from "./RowItemDetails"
import PropTypes from 'prop-types';

export const ListItemsDetails = ({ title, items, handlerDeleteItem }) => {

    return(
        <>
            <h5>{ title }</h5>
            <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    { items.map(({id, product, price, quantity}) => (
                        <RowItemDetails
                        key = {id}
                        id = {id}
                        product = {product}
                        price = {price}
                        quantity = {quantity}
                        handlerDeleteItem = { id => handlerDeleteItem (id) }
                        />
                    
                    ))}
                </tbody>
            </table>
        </>

    )

}

ListItemsDetails.propTypes = {
    title: PropTypes.string.isRequired,
    item: PropTypes.array.isRequired,
}