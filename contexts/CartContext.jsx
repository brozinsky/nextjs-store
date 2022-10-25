import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const CartContext = ({ children }) => {
  //Ourt application state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantitites] = useState(0);

  //Increase product countity
  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  //Decrease product quantity
  const decreaseQuantity = () => {
    setQuantity((prevState) => {
      if (prevState - 1 < 1) return 1;
      return prevState - 1;
    });
  };
  //Add Product To Cart
  const onAdd = (product, quantity) => {
    //Total Price
    setTotalPrice(
      (prevState) => prevState + product.price * quantity
    );
    //Increase total quantity
    setTotalQuantitites(
      (prevState) => prevState + quantity
    );
    //Check if product is in the cart
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
  //Remove product
  const onRemove = (product) => {
    //Set Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);

    //Remove from total quantities
    setTotalQuantitites((prevTotalQuantities) => prevTotalQuantities - 1);

    //Check if product exists
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
        showCart,
        setShowCart,
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