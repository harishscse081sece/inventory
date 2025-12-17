import React from "react";

export default function ProductCard() {
  return (
    <div className="w-72 bg-blue-900 rounded-lg shadow-lg border border-blue-700">
      <img
        src="iphoneimage.jpg"
        alt="Mobile"
        className="h-48 w-full object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-100">Iphone 17 Pro Max</h2>

        <p className="text-blue-300 text-sm mt-1">
          6.5-inch Display • 128GB Storage • 5000mAh Battery
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-300">₹1,50,000</span>

          <button className="bg-green-500 text-black px-4 py-1.5 rounded hover:bg-green-600">
            Purchase Now
          </button>
         
          

        </div>
      </div>
    </div>
  );
}
