import { RowItemDetails } from "./RowItemDetails"

export const ListItemsDetails = ({ title, items }) => {

    return(
        <>
            <h5>{ title }</h5>
            <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
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