import React, { useState } from "react";
import formatNumber from "./formatNumber";
import { MdShoppingCart } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { RiDiscountPercentFill } from "react-icons/ri";

function Product({ product }) {
  const [count, setCount] = useState(0);
  return (
    <li className="mb-8 shadow-2xl rounded-2xl hover:scale-110 transition-all w-3xs">
      <img
        className="bg-pink-100 rounded-se-2xl rounded-ss-2xl w-80 mb-1"
        src={product.images[0]}
        alt={product.title}
      />

      <span className="px-1.5 py-1 border border-gray-400 rounded-3xl ml-40 text-sm">
        🔥-{product.discountPercentage}%
      </span>

      <div className="p-4">
        <div className="flex gap-6 items-center relative mb-3">
          <div className="flex items-center">
            <RiDiscountPercentFill />
            <p className="text-2xl font-bold">
              {formatNumber(product.price, product.discountPercentage)}
            </p>
          </div>

          <div className="relative">
            <p className="text-gray-500">{formatNumber(product.price)}</p>
            <span className="absolute left-0 top-[24%] w-full h-[1.5px] bg-pink-500 rotate-[15deg] origin-left" />
          </div>
        </div>

        <h4 className="line-clamp-1 mb-3.5 font-semibold">{product.title}</h4>

        <div className="flex items-center gap-4">
          <span className="bg-[#7630ef] text-white flex items-center px-1.5 py-1 rounded-3xl">
            <IoStarSharp /> {product.rating}
          </span>

          <span className="text-2xl opacity-55">|</span>
          <span className="opacity-55">Stock:{product.stock}</span>

          {count === 0 ? (
            <button
              onClick={() => setCount(1)}
              className="p-2 bg-[#ee3fc8] text-2xl rounded-full text-white transition-all hover:bg-pink-900 hover:text-black"
            >
              <MdShoppingCart />
            </button>
          ) : (
            <div className="flex gap-0.5 items-center">
              <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))}>
                <HiOutlineMinusCircle className="text-xl rounded-full hover:bg-orange-600 hover:text-white transition-all" />
              </button>
              <span>{count}</span>
              <button onClick={() => setCount((prev) => prev + 1)}>
                <HiOutlinePlusCircle className="text-xl rounded-full hover:bg-orange-600 hover:text-white transition-all" />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Product;
