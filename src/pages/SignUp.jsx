import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { FaShopify } from "react-icons/fa";

function SignUp() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SIGNUP", payload: formData });
    navigate("/login");
  };

  return (
    <section className="bg-gradient-to-r from-[#ee3fc84f] to-[#7630ef4f] py-8">
      <div className="align-elements h-screen grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 bg-[#7630ef29] rounded-2xl p-10"
        >
          <div className=" flex gap-2 text-3xl font-bold mb-3 mx-25">
            <FaShopify /> <span>Shop</span>
          </div>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend">Your FirstName:</legend>
            <input
              name="firstName"
              type="text"
              className="input"
              placeholder="Type to here"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend">Your LastName:</legend>
            <input
              name="lastName"
              type="text"
              className="input"
              placeholder="Type to here"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="fieldeset">
            <legend className="fieldeset-legend">Email:</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type to here"
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
              placeholder="Type to here"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div>
            <button
              type="submit"
              className="btn bg-[#7630ef] text-white mx-25 mb-5"
            >
              SignUp
            </button>

            <div className="flex gap-3">
              <h3 className="ml-5">Do you have an account?</h3>
              <Link to="/login" className="text-purple-600">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
