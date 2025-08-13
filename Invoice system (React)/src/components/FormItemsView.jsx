import { useEffect, useState } from "react";

export const FormItemsView = ( { handler } ) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

        const {product, price, quantity} = formItemsState;

        useEffect(() => {
            //console.log('El precio ha sido modificado.')
        }, [price]);
    
        useEffect(() => {
            //console.log('El formItemsState ha sido modificado.')
        }, [formItemsState]);

        const onInputChange = ( { target: { name, value } } ) => {
        //console.log(name);
        //console.log(value);
        setFormItemsState({
            ...formItemsState,
            [ name ]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error. El precio introducido no es un número.')
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error. La cantidad tiene que ser mayor a 0.')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error. La cantidad no es un némero.')
            return;
        }

        handler (formItemsState);

        //Reiniciar los valores de los inputs.
        setFormItemsState ({
        product: '',
        price: '',
        quantity: '',
        });
    }

    return (<>
        <form className="w-50" onSubmit = { onInvoiceItemsSubmit } >
                            <input
                                type="text"
                                name="product"
                                value={ product } //Reinicia el valor del input.
                                placeholder="Producto"
                                className="form-control m-3" onChange = { onInputChange }
                            />
                            <input
                                type="text"
                                name="price"
                                value={ price } //Reinicia el valor del input.
                                placeholder="Precio"
                                className="form-control m-3"  onChange =  { onInputChange }
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={ quantity } //Reinicia el valor del input.
                                placeholder="Cantidad"
                                className="form-control m-3"  onChange =  { onInputChange }
                            />
                            
                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Añadir producto
                            </button>
                        </form>
    </>)
}