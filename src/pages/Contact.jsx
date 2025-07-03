import React from "react";
import { useFetch } from "../hooks/useFetch";

function Contact() {
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
    <section className="align-elements ">
      <div className="no-product">empty</div>
    </section>
  );
}

export default Contact;
