import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

export const CartDetails = ( { handlerDelete, items } ) => {

    const [ total, setTotal ] = useState(0);

    { /* Cálculo del total (con reduce). El acumulador inicializa en 0, luego coge el valor del primer
        producto y conforme itera, va recogiendo el valor de cada producto, los suma y los guarda. */}
    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]   )

    const onDeleteProduct = (id) => {
        //console.log('Producto eliminado.')
        handlerDelete(id);
    }

    return (

        <>
            <h3>Carro de compra</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map ( item =>(
                        <tr key = { item.product.id } >
                            <td> { item.product.name } </td>
                            <td> { item.product.price } </td>
                            <td> { item.quantity } </td>
                            <td> { item.quantity * item.product.price } </td>
                            <td> <button
                            className ="btn btn-danger"
                            onClick = { () => onDeleteProduct (item.product.id) }> Eliminar </button> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold"> { total } </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )

}