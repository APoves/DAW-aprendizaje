import { Navigate, Route, Routes } from "react-router-dom"
import { CartDetails } from "../components/CartDetails"
import { CatalogDetails } from "../components/CatalogDetails"

export const CartRoutes = ( { handlerAddProductCart, handlerDeleteProductCart, cartItems} ) => {
    return (

        <Routes>

          <Route 
            path = "catalog"
            element = { <CatalogDetails handler = { handlerAddProductCart } /> } /* Agrega nuevos productos */
          />

          <Route path = "cart" element = {(
            cartItems?.length <= 0 ?
              <div className="alert alert-warning my-4 w-50 text-center"> No hay productos en el carro de compra.</div>
              :
            (
              <div className="my-4 w-50">
                <CartDetails items = { cartItems } handlerDelete = {handlerDeleteProductCart} />
              </div>
            )
          )} />

          <Route path = "/" element = { <Navigate to = {'/catalog'} />} />

        </Routes>

    )
}