import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions"

export const itemsReducer = (state = [] , action) => {
    
    switch (action.type) {
        case AddProductCart: 
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case UpdateQuantityProductCart: 
            return state.map((i) => { //Se obtiene item
                    if (i.product.id === action.payload.id) { 
                        return {
                        ...i,
                        // se pregunta si el producto (su id) existe
                        quantity : i.quantity + 1 //si existe, se incrementa la cantidad.
                        };
                    }
                    return i; //se devuelve el objeto modificado, ya que el map siempre devuelve un array.
                });
        case DeleteProductCart: 
            return state.filter((i) => i.product.id !== action.payload);
        default:
            return state;
    }

}