import { useState } from "react"
import { CartDetails } from "./components/CartDetails"
import { CatalogDetails } from "./components/CatalogDetails"

const initialCartItems = [
    // {
    //    product:  {id: 1},
    //    quantity: 0,
    //    total: 0
    //}
];

export const CartApp = () => {

    const [ cartItems, setCartItems ] = useState(initialCartItems);
    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <CatalogDetails/>

                <div className="my-4 w-50">
                    <CartDetails items = { cartItems }/>
                </div>

            </div>
        </>
    )
}