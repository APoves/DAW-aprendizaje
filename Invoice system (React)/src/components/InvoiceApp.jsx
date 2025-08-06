import { getInvoice } from '../services/getInvoice'
import { ClientDetails } from './ClientDetails';
import { InvoiceDetails } from './invoiceDetails'
import {CompanyDetails} from './CompanyDetails';
import { ListItemsDetails } from './ListItemsDetails';

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();
    
    return(
        <>
            <div className = "container">

                <div className = "card my-4">

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

                        <ListItemsDetails title = "Detalles de la factura:" items = { items }/>

                    </div>
                </div>
            </div>
        </>
    )
}