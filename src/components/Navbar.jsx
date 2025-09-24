export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="Furniture Logo"
          className="h-14 w-14 object-contain"
        />
        <h1 className="text-2xl font-bold text-green-700">Nestly Living</h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-green-700 cursor-pointer">Home</li>
        <li className="hover:text-green-700 cursor-pointer">Shop</li>
        <li className="hover:text-green-700 cursor-pointer">Categories</li>
        <li className="hover:text-green-700 cursor-pointer">About Us</li>
        <li className="hover:text-green-700 cursor-pointer">Contact</li>
        <li className="hover:text-green-700 cursor-pointer">Blog</li>
      </ul>

      {/* Search Bar + Icons */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block w-48 border border-gray-300 rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button title="Wishlist">❤️</button>
        <button title="Cart">🛒</button>
      </div>
    </nav>
  );
}
