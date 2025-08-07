import { getInvoice } from './services/getInvoice'
import { ClientDetails } from './components/ClientDetails';
import { InvoiceDetails } from './components/invoiceDetails'
import {CompanyDetails} from './components/CompanyDetails';
import { ListItemsDetails } from './components/ListItemsDetails';
import { TotalInvoice } from './components/TotalInvoice';

export const InvoiceApp = () => {

    const { total, id, name, client, company, items } = getInvoice();
    
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
                        <TotalInvoice total = { total } />

                    </div>
                </div>
            </div>
        </>
    )
}