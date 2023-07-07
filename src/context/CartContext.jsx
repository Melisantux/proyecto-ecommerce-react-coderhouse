import { useState, createContext } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productInCart = cart.find((productCart) => productCart.id === product.id);

    if (!productInCart) {
      setCart(cart.concat({ ...product, quantity }));

      return;
    }

    const updatedCart = cart.map((productCart) => {
      if (productCart.id !== product.id) return productCart;

      return { ...productInCart, quantity: productInCart.quantity + quantity };
    });

    setCart(updatedCart);
  };

  const updateProduct = (id, quantity) => {
    const updatedCart = cart.map((productCart) => {
      if (productCart.id !== id) return productCart;

      return { ...productCart, quantity };
    });

    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((productCart) => productCart.id !== id);

    setCart(updatedCart);
  };

  const { itemsQuantity, totalPrice } = cart.reduce(
    (acc, product) => {
      acc.itemsQuantity += product.quantity;
      acc.totalPrice += product.price * product.quantity;

      return acc;
    },
    { itemsQuantity: 0, totalPrice: 0 },
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeProduct, updateProduct, itemsQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
