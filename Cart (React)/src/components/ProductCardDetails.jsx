export const ProductCardDetails = ( { name, description, price }) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-title"> { description } </p>
                    <p className="card-title"> { price } </p>
                    <button className="btn btn-primary">Agregar producto</button>
                </div>
            </div>
        </>
    )
}