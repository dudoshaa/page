import React from "react";
import { useFetch } from "../hooks/useFetch";

function About() {
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
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque
        tenetur asperiores beatae, praesentium culpa quos quidem error quae.
        Modi, voluptatibus reprehenderit ullam mollitia voluptate commodi
        possimus eligendi quos quae iusto earum dolorum facilis exercitationem
        nemo ipsa beatae, cum aperiam distinctio nisi asperiores officia
        incidunt reiciendis autem! Beatae error vero voluptate minus in
        obcaecati nisi aspernatur, placeat consectetur sunt vel ducimus
        corrupti! Mollitia non, omnis atque debitis eos impedit provident quasi
        modi dolorum deserunt praesentium porro aliquam rem minima, vitae
        eveniet tenetur error facilis totam perspiciatis! Sunt perferendis odit
        quam quo nisi debitis. Totam blanditiis, non vitae, quod culpa harum
        accusamus libero, deleniti ipsam quasi odit repudiandae soluta molestias
        nesciunt assumenda qui ipsa aperiam hic sapiente. Fuga illo nemo
        aperiam.
      </p>
    </section>
  );
}

export default About;
