export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Mini E-Commerce</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Product Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="h-40 bg-gray-200 rounded mb-3"></div>
          <h2 className="text-lg font-semibold">Product 1</h2>
          <p className="text-gray-600">₹999</p>
          <button className="mt-3 w-full bg-black text-white py-2 rounded">
            Add to Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="h-40 bg-gray-200 rounded mb-3"></div>
          <h2 className="text-lg font-semibold">Product 2</h2>
          <p className="text-gray-600">₹1499</p>
          <button className="mt-3 w-full bg-black text-white py-2 rounded">
            Add to Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="h-40 bg-gray-200 rounded mb-3"></div>
          <h2 className="text-lg font-semibold">Product 3</h2>
          <p className="text-gray-600">₹799</p>
          <button className="mt-3 w-full bg-black text-white py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
