import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardDetails } from "./ProductCardDetails";

export const CatalogDetails = ({ handler }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAll = async () => {
    const prods = await getProducts();
    setProducts(prods);
    setIsLoading(false);
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="d-flex flex-column align-items-center my-3">
          <div className="spinner-border text-info mb-2" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <div className="alert alert-info text-center mb-0" role="alert">
            Cargando productos...
          </div>
        </div>
      )}

      <div className="row">
        {!isLoading &&
          products.map(prod => (
            <div className="col-4 my-2" key={prod.id}>
              <ProductCardDetails
                handler={handler}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
              />
            </div>
          ))}
      </div>
    </>
  );
};