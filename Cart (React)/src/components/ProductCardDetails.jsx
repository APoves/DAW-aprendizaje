export const ProductCardDetails = ( { handler, id, name, description, price }) => {
    
    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
    }  

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <p className="card-title"> { description } </p>
                    <p className="card-title"> { price } </p>
                    <button className="btn btn-primary"
                    onClick = { () => onAddProduct ({ id, name, description, price }) }>Agregar producto</button>
                </div>
            </div>
        </>
    )
}