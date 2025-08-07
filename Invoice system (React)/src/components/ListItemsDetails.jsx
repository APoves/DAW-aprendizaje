import { RowItemDetails } from "./RowItemDetails"
import PropTypes from 'prop-types';

export const ListItemsDetails = ({ title, items }) => {

    return(
        <>
            <h5>{ title }</h5>
            <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th type="number">Precio</th>
                        <th type="number">Cantidad</th>
                    </tr>
                </thead>

                <tbody>
                    { items.map(({id, product, price, quantity}) => (
                        <RowItemDetails key = {id} product = {product} price = {price} quantity = {quantity} />
                    
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