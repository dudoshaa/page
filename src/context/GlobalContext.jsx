import React, { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

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
          item.id === payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
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
          .filter((item) => item.quantity > 0),
      };
    case "LOGIN":
      return {
        ...state,
        user: state.userData,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const getInitialState = () => {
  const savedBasket = localStorage.getItem("basket");
  const savedUser = localStorage.getItem("user");

  return {
    basket: savedBasket ? JSON.parse(savedBasket) : [],
    user: savedUser ? JSON.parse(savedUser) : null,
    userData: {
      displayName: "Durdona Burxonova",
      email: "burxonovadurdona027@gmail.com",
      password: "12345678",
      photoURL:
        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
    },
  };
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {}, getInitialState);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
