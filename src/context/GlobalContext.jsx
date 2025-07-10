import React, { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, { ...payload, quantity: 1 }],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== payload),
      };

    case "INCREMENT_PRODUCT":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT_PRODUCT":
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // 0 bo‘lsa olib tashlaydi
      };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, initialState);

  // ⬇️ LocalStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
