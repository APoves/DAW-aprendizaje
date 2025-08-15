import { CartDetails } from './components/CartDetails'
import { CatalogDetails } from "./components/CatalogDetails"

export const CartApp = () => {

    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <CatalogDetails/>

                <div className="my-4 w-50">
                    <CartDetails/>
                </div>

            </div>
        </>
    )
}