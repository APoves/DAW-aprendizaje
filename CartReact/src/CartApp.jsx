export const CartApp = () => {
    return (
        <>
            <div class="containter">
                <h3>Cart App</h3>
                <div className="row">

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">La sombra del viento</h5>
                                <p className="card-title">Carlos Ruiz Zafón</p>
                                <p className="card-title">22.90€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Diez negritos</h5>
                                <p className="card-title">Agatha Christie</p>
                                <p className="card-title">19.95€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">El asesinato de Pitágoras</h5>
                                <p className="card-title">Marcos Chicot</p>
                                <p className="card-title">23.50€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">El cuarto mono</h5>
                                <p className="card-title">J.D. Barker</p>
                                <p className="card-title">21.90€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Los pilares de la tierra</h5>
                                <p className="card-title">Ken Follet</p>
                                <p className="card-title">18.75€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">El imperio final</h5>
                                <p className="card-title">Brandon Sanderson</p>
                                <p className="card-title">21.90€</p>
                                <button className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compra</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </thead>
                        <tbody>
                            <td>Nombre</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Total</td>
                            <td>Eliminar</td>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    )
}