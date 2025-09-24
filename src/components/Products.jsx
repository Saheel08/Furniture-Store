export default function Products() {
  const products = [
    {
      id: 1,
      name: "Wooden Sofa Chair",
      price: "18,000",
      img: "/images/WoodenSofaChair.png",
    },
    {
      id: 2,
      name: "Stylish Chair",
      price: "8500",
      img: "/images/Stylish Chair.png",
    },
    {
      id: 3,
      name: "Wooden Table",
      price: "12,000",
      img: "/images/Wooden Table.png",
    },
  ];

  return (
    <section className="py-12 px-8 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg p-4 text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 object-contain rounded-md mb-4 bg-gray-50"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">₹{product.price}</p>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
