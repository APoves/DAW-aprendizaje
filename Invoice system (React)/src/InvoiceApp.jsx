import { useEffect, useState } from 'react';
import { getInvoice, calculateTotal } from './services/getInvoice'
import { ClientDetails } from './components/ClientDetails';
import { InvoiceDetails } from './components/invoiceDetails'
import {CompanyDetails} from './components/CompanyDetails';
import { ListItemsDetails } from './components/ListItemsDetails';
import { TotalInvoice } from './components/TotalInvoice';
import { FormItemsView } from './components/FormItemsView';

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

    const [ activeForm, setActiveForm ] = useState (false);
    const [ total, setTotal] = useState(0);

    //Contador para incremento de id de productos. (Empieza en 4 porque hasta ahora hay 3 productos).
    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    //useState para guardar los items en la página. Con setItems se pueden agregar nuevos items a la lista.
    const[items, setItems] = useState( [] );

    const { id, name, client, company } = invoice;

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        //console.log('El counter ha sido modificado.')
    }, [counter]);

    useEffect(() => {
        setTotal(calculateTotal(items));
        //console.log('El item ha sido modificado.')
    }, [items]);

    const handlerAddItems = ( product, price, quantity) => {

        //Objeto que contiene los datos del formulario.
        setItems ([...items,  {
            id: counter,
            product: product.trim(),
            price: +price.trim(), //Conversión a número
            quantity: parseInt(quantity.trim(), 10) //Conversión a número
        } ]);

        setCounter (counter+1); //Incrementar contador (id) para el siguiente producto.
        }

        const onActiveForm = () => {
            setActiveForm(!activeForm)
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

                        <button className="btn btn-secondary"
                            onClick= { onActiveForm }> {!activeForm ? 'Añadir producto ' : 'Ocultar formulario'}
                        </button>
                        {/* Op. ternario:  */} { !activeForm? '' : <FormItemsView handler = { handlerAddItems }/> }
                        {/*Op. ternario simplificado:
                        !activeForm || <FormItemsView handler={handlerAddItems} /> */}

                    </div>
                </div>
            </div>
        </>
    )
}