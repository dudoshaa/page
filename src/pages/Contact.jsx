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
    <section className="align-elements">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora
        deserunt perferendis explicabo quia libero consequatur ex harum ratione
        ipsum autem, officiis dolorum odit molestias beatae, hic, temporibus
        unde distinctio exercitationem delectus architecto expedita tempore
        illum? Odit ex est, repellendus distinctio eligendi doloremque mollitia
        tempora soluta delectus iste, explicabo vero quam obcaecati dolores modi
        cupiditate odio omnis optio! At perferendis itaque nisi assumenda, earum
        quae cumque quo voluptate, dolorem, autem sapiente eveniet quis vero
        esse eos provident consequatur accusamus a qui! Quisquam eveniet quidem
        totam vero accusantium omnis error quas excepturi, voluptatem
        repudiandae ipsa reprehenderit similique. Impedit ullam nam consequatur
        architecto placeat facilis esse saepe molestias inventore, earum, magni
        aliquam blanditiis, quod voluptates eaque animi ex quas unde assumenda
        fuga.
      </p>
    </section>
  );
}

export default Contact;
