import { useState } from 'react';
import { getInvoice } from './services/getInvoice'
import { ClientDetails } from './components/ClientDetails';
import { InvoiceDetails } from './components/invoiceDetails'
import {CompanyDetails} from './components/CompanyDetails';
import { ListItemsDetails } from './components/ListItemsDetails';
import { TotalInvoice } from './components/TotalInvoice';

export const InvoiceApp = () => {

    const { total, id, name, client, company, items: itemsInitial } = getInvoice();
    
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    //useState para guardar los items en la página. Con setItems se pueden agregar nuevos items a la lista.
    const[items, setItems] = useState(itemsInitial);

    //Contador para incremento de id de productos. (Empieza en 4 porque hasta ahora hay 3 productos).
    const [counter, setCounter] = useState(4);

    const onProductChange = ( { target } ) => {
        console.log(target.value);
        setProductValue(target.value);
    }
    const onPriceChange = ( { target } ) => {
        console.log(target.value);
        setPriceValue(target.value);
    }
    const onQuantityChange = ( { target } ) => {
        console.log(target.value);
        setQuantityValue(target.value);
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        //Validación por si se añade un producto con cantidad o precio 0.
        if(productValue.trim().length <= 1) return;
        if(priceValue.trim().length <= 1) return;
        if(isNaN(priceValue.trim())) {
            alert('Error. El precio introducido debe ser mayor a 0.')
            return;
        }
        if(quantityValue.trim().length < 1) return;
        if(isNaN(quantityValue.trim())) {
            alert('Error. La cantidad introducida debe ser un número.')
            return;
        }

        //Objeto que contiene los datos del formulario.
        setItems ([...items,  {
            id: counter,
            product: productValue.trim(),
            price: +priceValue.trim(), //Conversión a número
            quantity: parseInt(quantityValue.trim(), 10) //Conversión a número
        } ]);
        //Reiniciar los valores de los inputs.
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        setCounter (counter+1); //Incrementar contador (id) para el siguiente producto.
        }
    
    return (
        <>
            <div className = "container">

                <div className = "card my-4 border border-dark">

                    <div className = "card-header fs-5 fw-semibold ">
                        Ejemplo Factura:
                    </div>

                    <div className = "card-body">

                        <InvoiceDetails id={ id } name={ name }/>

                        <div className = "row my-3">

                            <div className = "col">
                                <ClientDetails title = "Datos del cliente:" client = { client }/>
                            </div>

                            <div className = "col">
                                <CompanyDetails title = "Datos de la empresa:" company = { company }/>
                            </div>
                        </div>

                        <ListItemsDetails title = "Productos de la factura:" items = { items }/>
                        <TotalInvoice total = { total } />
                        
                        <form className="w-50" onSubmit = { onInvoiceItemsSubmit } >
                            <input
                                type="text"
                                name="product"
                                value={ productValue } //Reinicia el valor del input.
                                placeholder="Producto"
                                className="form-control m-3" onChange = { onProductChange }
                            />
                            <input
                                type="text"
                                name="price"
                                value={ priceValue } //Reinicia el valor del input.
                                placeholder="Precio"
                                className="form-control m-3"  onChange =  { onPriceChange }
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={ quantityValue } //Reinicia el valor del input.
                                placeholder="Cantidad"
                                className="form-control m-3"  onChange =  { onQuantityChange }
                            />
                            
                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Añadir producto
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}