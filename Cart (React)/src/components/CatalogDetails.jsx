import { useEffect, useState} from "react";
import { getProducts } from "../services/productService"
import { ProductCardDetails } from "./ProductCardDetails"

export const CatalogDetails = () => {

    const [ products, setProducts ] = useState ([]);

    useEffect(
        () => {
          setProducts(getProducts());
        }, []);

    return (
        <>
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 my-2" key = {prod.id }>
                        <ProductCardDetails
                        name = { prod.name }
                        description = { prod.description}
                        price = { prod.price }
                    />
                    </div>
                ))}
            </div>
        </>
    )
}