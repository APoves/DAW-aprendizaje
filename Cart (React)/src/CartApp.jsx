import { useState } from "react"
import { CartDetails } from "./components/CartDetails"
import { CatalogDetails } from "./components/CatalogDetails"

const initialCartItems = [
    // {
    //    product:  {id: 1},
    //    quantity: 0,
    //}
];

export const CartApp = () => {

    const [ cartItems, setCartItems ] = useState(initialCartItems);

    {/* Agrega nuevos productos */}
    const handlerAddProductCart = (product) => {
        //Modificación de cantidades de producto (hay dos opciones)
        
        /*Opción 1. (Mueve el producto abajo.)
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        // Si el producto ya está en el carrito, incrementa su cantidad en 1.
        if (hasItem) {
            setCartItems([
                ...cartItems.filter((i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1, 
                }
            ])
        // Si el producto no está en el carrito, lo añade con cantidad 1.
        } else {
            setCartItems ( [
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);

        }*/
        
        /*Opción 2. (Mantiene el producto en su sitio).*/
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        // Si el producto ya está en el carrito, incrementa su cantidad en 1.
        if (hasItem) {
            setCartItems(
                cartItems.map((i) => { //Se obtiene item
                    if (i.product.id === product.id) { // se pregunta si el producto (su id) existe
                        i.quantity = i.quantity + 1; //si existe, se incrementa la cantidad.
                    }
                    return i; //se devuelve el objeto modificado, ya que el map siempre devuelve un array.
                })
            )
        }else{
            setCartItems ( [
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
            /*hasta aquí la opción 2*/
        }

    }

    //Eliminar productos del carro:

    const handlerDeleteProductCart = (id) => {
        setCartItems ([
            ...cartItems.filter((i) => i.product.id !== id),

        ])
    }

    //

    return (
        <>

            <div className="container">

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