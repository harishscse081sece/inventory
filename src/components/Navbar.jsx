import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Amazon</h1>

      <ul className="flex gap-6 text-white">
        <li className="hover:text-blue-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-300 cursor-pointer">Products</li>
        <li className="hover:text-blue-300 cursor-pointer">Cart</li>
      </ul>
    </nav>
  );
}
