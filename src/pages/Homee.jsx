import React from "react";
import { useFetch } from "../hooks/useFetch";
import Product from "../components/Product";
import { Link } from "react-router-dom";

function Homee() {
  const { data: products, loading } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  return (
    <section>
      <ul className="align-elements grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-15">
        {products &&
          products.products.map((product) => {
            console.log(product)
            return (
              <Link key={product.id} to={`/singleProduct/${product.id}`}>
                <Product product={product} />
              </Link>
            );
          })}
      </ul>
    </section>
  );
}

export default Homee;
