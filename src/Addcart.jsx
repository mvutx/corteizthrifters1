import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Hook to use cart safely
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart (handles quantity correctly)
  const addToCart = (product) => {
    if (!product || !product.id) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove one item unit safely
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Remove item completely (extra helper)
  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};