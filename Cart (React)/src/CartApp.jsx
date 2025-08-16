import { CartDetails } from "./components/CartDetails"
import { CatalogDetails } from "./components/CatalogDetails"
import { useItemsCart } from "./hooks/useItemsCart"

export const CartApp = () => {

    const { handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogDetails handler = { product => handlerAddProductCart (product) } /> {/* Agrega nuevos productos */}

                {/* Ocultar carrito (con operador ternario) */}
                { cartItems?.length <= 0 ||
                (
                    <div className="my-4 w-50">
                        <CartDetails items = { cartItems } handlerDelete = {handlerDeleteProductCart}/>
                    </div>
                )}
            </div>
        </>
    )
}