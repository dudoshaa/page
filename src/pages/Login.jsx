import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";

function Login() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      dispatch({ type: "LOGIN", payload: storedUser });
      navigate("/");
    } else {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#ee3fc84f] to-[#7630ef4f] py-8">
      <div className="align-elements h-screen grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 bg-[#7630ef29] rounded-2xl p-10"
        >
          <div className=" flex gap-2 text-3xl font-bold mb-3 mx-25">
            <FaShopify /> <h1>Shop</h1>
          </div>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend">Email:</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend">Password:</legend>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Type your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="btn bg-[#7630ef] text-white mx-auto mb-3"
          >
            Login
          </button>

          <div className="flex gap-3 justify-center">
            <span>Don't have an account?</span>
            <Link to="/sign" className="text-purple-600">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
