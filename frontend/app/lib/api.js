export const getProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
