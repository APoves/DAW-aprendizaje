import { useEffect, useState } from 'react';
import { getInvoice, calculateTotal } from './services/getInvoice'
import { ClientDetails } from './components/ClientDetails';
import { InvoiceDetails } from './components/invoiceDetails'
import {CompanyDetails} from './components/CompanyDetails';
import { ListItemsDetails } from './components/ListItemsDetails';
import { TotalInvoice } from './components/TotalInvoice';

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name:'',
        lastName:'',
        address:{
            country: '',
            city: '',
            street: '',
            number: 0,
            postalCode: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []       
};

export const InvoiceApp = () => {

const [ total, setTotal] = useState(0);

    //Contador para incremento de id de productos. (Empieza en 4 porque hasta ahora hay 3 productos).
    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    //useState para guardar los items en la página. Con setItems se pueden agregar nuevos items a la lista.
    const[items, setItems] = useState( [] );

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { id, name, client, company } = invoice;
    const {product, price, quantity} = formItemsState;

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        //console.log('El precio ha sido modificado.')
    }, [price]);

    useEffect(() => {
        //console.log('El formItemsState ha sido modificado.')
    }, [formItemsState]);

    useEffect(() => {
        //console.log('El counter ha sido modificado.')
    }, [counter]);

    useEffect(() => {
        setTotal(calculateTotal(items));
        //console.log('El item ha sido modificado.')
    }, [items]);

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

        //Validación por si se añade un producto con cantidad o precio 0.
        if(product.trim().length <= 1) return;
        if(price.trim().length <= 1) return;
        if(isNaN(price.trim())) {
            alert('Error. El precio introducido debe ser mayor a 0.')
            return;
        }
        if(quantity.trim().length < 1) return;
        if(isNaN(quantity.trim())) {
            alert('Error. La cantidad introducida debe ser un número.')
            return;
        }

        //Objeto que contiene los datos del formulario.
        setItems ([...items,  {
            id: counter,
            product: product.trim(),
            price: +price.trim(), //Conversión a número
            quantity: parseInt(quantity.trim(), 10) //Conversión a número
        } ]);
        //Reiniciar los valores de los inputs.
        setFormItemsState ({
        product: '',
        price: '',
        quantity: '',
        });
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

                    </div>
                </div>
            </div>
        </>
    )
}