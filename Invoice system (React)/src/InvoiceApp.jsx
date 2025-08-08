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

    return(
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
                        
                        <form className="w-50" onSubmit = { event => {
                            event.preventDefault();
                            //objeto que contiene los datos del formulario.
                            setItems ([...items,  {
                                id: 4,
                                product: productValue,
                                price: +priceValue, //conversión a número
                                quantity: parseInt(quantityValue, 10) //conversión a número
                            } ]);
                            //Reiniciar los valores de los inputs.
                            setProductValue('');
                            setPriceValue('');
                            setQuantityValue('');
                        } } >

                            <input
                                type="text"
                                name="product"
                                value={ productValue } //Reinicia el valor del input.
                                placeholder="Producto"
                                className="form-control m-3" onChange = { event => {
                                    console.log(event.target.value);
                                    setProductValue(event.target.value);
                                } } />
                            <input
                                type="number"
                                name="price"
                                value={ priceValue } //Reinicia el valor del input.
                                placeholder="Precio"
                                className="form-control m-3"  onChange = { event => {
                                    console.log(event.target.value);
                                    setPriceValue(event.target.value);
                                } } />
                            <input
                                type="number"
                                name="quantity"
                                value={ quantityValue } //Reinicia el valor del input.
                                placeholder="Cantidad"
                                className="form-control m-3"  onChange = { event => {
                                    console.log(event.target.value);
                                    setQuantityValue(event.target.value);
                                } } />
                            <button type="submit" className="btn btn-primary">Añadir producto</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}