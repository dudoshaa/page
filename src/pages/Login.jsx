import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Login() {
  const { userData, dispatch } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (userData.email == email && userData.password == password) {
      dispatch({ type: "LOGIN" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#ee3fc84f] to-[#7630ef4f]  py-8">
      <div className="align-elements h-screen grid place-items-center ">
        <form onSubmit={handleSubmit} className="w-96 bg-[#7630ef29] rounded-2xl p-10">
          <h1 className="text-3xl font-bold mb-3 mx-25 ">Shop</h1>
          <fieldset className="fieldeset mb-3">
            <legend className="fieldeset-legend mb-2">Email:</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type to here"
            />
          </fieldset>
          <fieldset className="fieldeset">
            <legend className="fieldeset-legend mb-2">Password:</legend>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Type to here"
            />
          </fieldset>
          <div className="my-5">
            <button className="btn  bg-[#7630ef] text-white mx-25">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
