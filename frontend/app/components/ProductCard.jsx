"use client";

import useCartStore from "../store/cartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-3"
      />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
