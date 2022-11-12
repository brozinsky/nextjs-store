import { createContext, useContext, useState } from "react";

const Context = createContext();

export const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantitites] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevState) => {
      if (prevState - 1 < 1) return 1;
      return prevState - 1;
    });
  };

  const onAdd = (product, quantity) => {
    setTotalPrice((prevState) => prevState + product.price * quantity);
    setTotalQuantitites((prevState) => prevState + quantity);
    //check if product is in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  const onRemove = (product) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    //remove from total quantities
    setTotalQuantitites((prevTotalQuantities) => prevTotalQuantities - 1);

    //check if product exists
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <Context.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        onAdd,
        onRemove,
        totalPrice,
        totalQuantities,
        setQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
