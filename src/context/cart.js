import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { handledelete, increamentItem, dicreamentItem } from "./cartreducers";

const cartcontext = createContext();

export function useCart() {
  return useContext(cartcontext);
}

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return handledelete(action.payload, state);

    case "add":
      return [...state, action.payload];

    case "increament":
      return increamentItem(action.payload, state);

    case "dicreament":
      return dicreamentItem(action.payload, state);

    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: 90.0,
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: 32.0,
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 3,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: 32.0,
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 4,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: 32.0,
      quantity: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
  ]);

  const [totalprice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function calculatetotal() {
      let total = 0;
      await products.forEach((item) => {
        total = total + item.price * item.quantity;
      });
      setTotalPrice(total);
    }
    calculatetotal();
  }, [products]);

  const value = {
    products,
    dispatch,
    totalprice,
  };
  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};

export default CartProvider;
