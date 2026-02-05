import { createContext, useEffect, useReducer } from "react";
export const CartContext = createContext();

const getProduct = () => {
  let res = localStorage.getItem("cart");
  return res ? JSON.parse(res) : [];
};
const initialState = {
  cartItems: getProduct(),
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      // console.log(action);
      // todo
      //  get the product

      // check in the cart
      // if exist , do nothings
      // if not found then add qty, then return new cart item

      const isExist = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        const newObj = { ...action.payload, qty: 1 };
        const newCartItem = [...state.cartItems, newObj];
        return {
          cartItems: newCartItem,
        };
      }
    }
    case "default": {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
