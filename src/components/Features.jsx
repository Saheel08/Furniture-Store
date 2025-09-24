export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Fast Delivery */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <img src="public/images/delivery.png" alt="Fast Delivery" className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Get your furniture quickly and safely.</p>
          </div>
        </div>

        {/* Premium Quality */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <img src="public/images/quality.png" alt="Premium Quality" className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Crafted with the finest materials.</p>
          </div>
        </div>

        {/* Easy Returns */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <img src="public/images/returns.png" alt="Easy Returns" className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold">Easy Returns</h3>
            <p className="text-gray-600 text-sm">Hassle-free 7-day return policy.</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <img src="public/images/support.png" alt="24/7 Support" className="h-12 w-12" />
          <div>
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600 text-sm">We’re always here to help you.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
