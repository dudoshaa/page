import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

function BasketList() {
  const { basket: products, dispatch } = useContext(GlobalContext);

  return (
    <ul className="align-elements grid grid-cols-1 gap-4">
      {products && products.length > 0 ? (
        products.map((pr) => (
          <li
            key={pr.id}
            className="bg-base-200 rounded-3xl flex items-center p-4 justify-between"
          >
            {/* faqat bu qism linkda */}
            <Link to={`/singleProduct/${pr.id}`} className="flex items-center mr-auto">
              <img src={pr.images[0]} alt={pr.title} width={100} />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-base-content">
                  {pr.title}
                </h2>
                <p className="text-base-content">Price: ${pr.price}</p>
              </div>
            </Link>

            {/* tugmalar LINK TASHQARISIDA */}
            <div className="flex gap-1 items-center">
              <button
                onClick={() =>
                  dispatch({ type: "DECREMENT_PRODUCT", payload: pr.id })
                }
              >
                <HiOutlineMinusCircle className="text-xl rounded-full text-base-content hover:bg-primary hover:text-primary-content transition-all" />
              </button>

              <span className="text-base-content">{pr.quantity || 1}</span>

              <button
                onClick={() =>
                  dispatch({ type: "INCREMENT_PRODUCT", payload: pr.id })
                }
              >
                <HiOutlinePlusCircle className="text-xl rounded-full text-base-content hover:bg-primary hover:text-primary-content transition-all" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <section className="align-elements">
          <div className="no-product text-center text-xl text-base-content">
            empty
          </div>
        </section>
      )}
    </ul>
  );
}

export default BasketList;
