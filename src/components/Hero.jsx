export default function Hero() {
  return (
    <section
      className="relative h-[500px] flex items-center bg-gradient-to-r from-green-700 via-green-600 to-green-500"
    >
      {/* Overlay (optional, for style) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-8 md:px-20 max-w-2xl">
        <h2 className="text-lg font-semibold mb-2">
          The Best Online Furniture Store
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Modern <span className="text-green-500">Furniture</span> Collection
        </h1>
        <p className="mb-6 text-gray-100">
          Discover elegant and stylish furniture designed for comfort and quality.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200">
            Shop Now
          </button>
          <button className="underline">View All Products</button>
        </div>
      </div>
    </section>
  );
}
