import React, { useContext, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { IoStarSharp } from "react-icons/io5";
import formatNumber from "../components/formatNumber";
import { GlobalContext } from "../context/GlobalContext";

function SingleProduct() {
  const {basket, dispatch } = useContext(GlobalContext);
  const { id } = useParams();
  const { data: product, loading } = useFetch(
    "https://dummyjson.com/product/" + id
  );
  if (loading) {
    return (
      <div className="flex justify-center items-center max-w-[100%] max-h-[100%]">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    );
  }

  if (!product) return null; 

const cartItem = basket.find((item) => item.id === product.id);
  

  return (
    <>
      {product && (
        <div className="align-elements">
          <Link
            to="/"
            className="flex items-center gap-1 ml-5 transition-all hover:text-pink-500 fixed"
          >
            <MdArrowBackIosNew />
            <span className="uppercase ">Home</span>
          </Link>
          <div className="flex items-center">
            <img
              className=""
              src={product.images[0]}
              alt=""
              width={800}
              height={800}
            />
            <div className="">
              <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
              <p className="flex items-center mb-4 text-2xl">
                <IoStarSharp className="text-yellow-500" />
                {product.rating}
              </p>
              <div className="flex items-center gap-10 mb-8">
                <p className="text-4xl text-pink-800 font-bold">
                  {formatNumber(product.price, product.discountPercentage)}
                </p>
                <div className="relative">
                  <p className="text-gray-500 text-2xl">
                    {formatNumber(product.price)}
                  </p>
                  <span className="absolute left-0 top-[24%] w-full h-[1.5px] bg-pink-500 rotate-[15deg] origin-left" />
                </div>
              </div>
              <h3 className=" w-16 px-4 py-2 rounded-2xl border-2 mb-2">
                Info
              </h3>
              <ul className=" info flex flex-col gap-3 w-3xs mb-5">
                <li>
                  <span>Article:</span>
                  <p>{product.meta.barcode}</p>
                </li>
                <li>
                  <span>Warranty:</span>
                  <p>{product.warrantyInformation}</p>
                </li>
                <li>
                  <span>Category:</span>
                  <p className="font-bold">"{product.category}"</p>
                </li>
                <li>
                  <span>Width:</span>
                  <p>{product.dimensions.width}</p>
                </li>
                <li>
                  <span>Height:</span>
                  <p>{product.dimensions.height}</p>
                </li>
                <li>
                  <span>Depth:</span>
                  <p>{product.dimensions.depth}</p>
                </li>
                <li>
                  <span>Stock:</span>
                  <p>{product.stock}</p>
                </li>
              </ul>
              <div className="w-110">
                <h3 className=" w-18 px-2.5 py-2 rounded-2xl border-2 mb-2">
                  Details
                </h3>
                <p className="mb-3.5">{product.description}</p>
              </div>
              {!cartItem ? (
                <button
                  onClick={()=>dispatch({ type: "ADD_PRODUCT",payload:product })}
                  className=" flex justify-center w-110 p-2 bg-[#ee3fc8] text-2xl rounded-full text-white transition-all hover:bg-pink-900 hover:text-black"
                >
                  <MdShoppingCart />
                </button>
              ) : (
                <div className="flex justify-between items-center w-110 ">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREMENT_PRODUCT",
                        payload: product.id,
                      })
                    }
                  >
                    <HiOutlineMinusCircle className="text-2xl rounded-full hover:bg-pink-600 hover:text-white transition-all" />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREMENT_PRODUCT",
                        payload: product.id,
                      })
                    }
                  >
                    <HiOutlinePlusCircle className="text-2xl rounded-full hover:bg-pink-600 hover:text-white transition-all" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
