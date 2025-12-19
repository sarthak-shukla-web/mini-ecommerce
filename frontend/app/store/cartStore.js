import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      set({
        cart: cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, qty: 1 }],
      });
    }
  },

  removeFromCart: (id) => {
    set({
      cart: get().cart.filter((item) => item._id !== id),
    });
  },
}));

export default useCartStore;
