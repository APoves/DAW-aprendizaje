import { getInvoice } from '../services/getInvoice'

export const InvoiceApp = () => {

    const { id, name, client, company } = getInvoice();

    const { name: nameClient, lastName, address} = client;
    
    const { country, city, street, number, postalCode } = address;

    const { items } = getInvoice();
    
    return(
        <>
            <div className ="container">

                <div className="card my-4">

                    <div className="card-header fs-5 fw-semibold ">
                        Ejemplo Factura:
                    </div>
                    
                    <div className="card-body">
                        <ul className = "list-group">
                            <li className = "list-group-item"> Id: { id }</li>
                            <li className = "list-group-item"> Name: { name }</li>
                        </ul>

                        <div className="row my-3">
                            <div className="col">
                                <h5>Datos del cliente:</h5>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-primary">{ nameClient } { lastName }</li>                
                                    <li className="list-group-item">{ city } / { country }</li>
                                    <li className="list-group-item">{ street }, { number } </li>
                                    <li className="list-group-item">{ postalCode }</li>
                                </ul>
                            </div>

                            <div className="col">
                                <h5>Datos de la empresa:</h5>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-primary"> { company.name }</li>
                                    <li className="list-group-item"> { company.fiscalNumber }</li>
                                </ul>
                            </div>
                        </div>

                        <h5>Productos de la factura:</h5>
                        <table className ="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                { items.map(({id, product, price, quantity}) => (<tr key = { id }>
                                    <td>{ product }</td>
                                    <td>{ price }</td>
                                    <td>{ quantity }</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}