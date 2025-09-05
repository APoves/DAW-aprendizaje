import { Navigate, Route, Routes } from "react-router-dom"
import { CartDetails } from "./components/CartDetails"
import { CatalogDetails } from "./components/CatalogDetails"
import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar"

export const CartApp = () => {

  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h3>Cart App</h3>
      </div>
    </>
  )
}