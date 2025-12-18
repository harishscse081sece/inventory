import React from 'react';

const OrderSummary = ({ product }) => {
  const productData = {
    name: product?.name || 'MOBILE PHONE',
    image: product?.image || "https://picsum.photos/id/1/200",
    price: product?.price || 2000,
    originalPrice: (product?.price || 2000) * 2,
    quantity: 1,
    rating: 4.5,
    reviews: 200,
  };

  const total = productData.price * productData.quantity;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white ml-10 pr-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>

      <div className="flex items-center space-x-4">
        <img src={productData.image} alt={productData.name} className="w-24 h-24 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{productData.name}</h3>
          <p className="text-sm text-gray-500">Rating: ⭐ {productData.rating} ({productData.reviews} reviews)</p>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-green-600 font-bold">Rs. {productData.price}</p>
            <p className="line-through text-gray-400 text-sm">Rs. {productData.originalPrice}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">Quantity: {productData.quantity}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-medium text-gray-700">
        <p>Total</p>
        <p>Rs. {total}</p>
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;