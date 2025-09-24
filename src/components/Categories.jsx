export default function Categories() {
  const categories = [
    { name: "Chairs", items: "1500+", image: "/Images/chair.png" },
    { name: "Sofa", items: "750+", image: "/images/sofa.png" },
    { name: "Lighting", items: "450+", image: "/images/light.png" },
  ];

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="border rounded-xl shadow-sm p-6 bg-white">
            <img src={cat.image} alt={cat.name} className="h-100 mx-auto mb-4" />
            <h3 className="font-bold">{cat.name}</h3>
            <p className="text-gray-600">{cat.items} Items</p>
          </div>
        ))}
      </div>
    </section>
  );
}
