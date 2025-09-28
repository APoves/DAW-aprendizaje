import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [ cartItems, dispatch ] = useReducer(itemsReducer, initialCartItems);
    
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

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
            { /* esto era la opción 2, pero se termina sustituyendo por dispatch.
                setCartItems(
                cartItems.map((i) => { //Se obtiene item
                    if (i.product.id === product.id) { // se pregunta si el producto (su id) existe
                        i.quantity = i.quantity + 1; //si existe, se incrementa la cantidad.
                    }
                    return i; //se devuelve el objeto modificado, ya que el map siempre devuelve un array.
                })
            ); */
            /*hasta aquí la opción 2*/}
            dispatch(
                {
                    type:UpdateQuantityProductCart,
                    payload: product,
                }
            );
        }else{
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    //Eliminar productos del carro:

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
} 
