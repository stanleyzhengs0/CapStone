// src/components/Header.jsx
import React, { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const categories = [
  "Audio",
  "TVs",
  "Mobile Phones",
  "Laptops",
  "Gaming",
  "Computer Accessories",
  "Cameras",
  "Wearables",
  "Home Appliances",
  "Networking",
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none" stroke="#ffffff" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
                <path d="M12 12v8a2 2 0 0 0 4 0" />
                <path d="M12 2v1" />
              </svg>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Departments dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
                Departments
              </button>
              <div
                className={`absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-200 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="py-3">
                  {categories.map((c) => (
                    <li key={c}>
                      <Link
                        to={`/products/category/${encodeURIComponent(c)}`}
                        className="block px-5 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to="/products"
              className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200"
            >
              All Products
            </Link>
            <Link
              to="/products/category/TVs"
              className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200"
            >
              TV's
            </Link>
            <Link
              to="/products/category/Mobile%20Phones"
              className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200"
            >
              Mobile Phones
            </Link>
            <Link
              to="/products/category/Computer%20Accessories"
              className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200"
            >
              Computer Accessories
            </Link>
          </nav>

          {/* User & Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/auth" className="flex items-center gap-1 text-white">
              <User className="w-5 h-5" />
              <span
                className={`text-sm font-display-light ${
                  user ? "text-green-400" : "text-red-400"
                }`}
              >
                {user ? `Hi, ${user.firstName}` : "Sign in"}
              </span>
            </Link>
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
