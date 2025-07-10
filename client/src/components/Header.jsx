import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-umbrella-icon lucide-umbrella"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>
              </div>
              {/* Logo <span className="text-2xl font-bold text-white">Logo</span>*/}
            </div>
          </div>

          {/* Desktop Navigation - Rounded Pills */}
          <nav className="hidden md:flex items-center space-x-2">
            <a href="#" className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
              Departments
            </a>
            <a href="#" className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
              Category 1
            </a>
            <a href="#" className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
             Category 2
            </a>
            <a href="#" className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
             Category 3
            </a>
            <a href="#" className="font-display-medium px-6 py-2.5 text-[#ffffffb3] hover:text-black hover:bg-white/50 rounded-full transition-all duration-200">
             Category 4
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">            
            <button className="p-2 text-gray-700 hover:text-black transition-colors">
              <User className="w-5 h-5 text-white" />
            </button>
            
            <button className="p-2 text-gray-700 hover:text-black transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 py-4 rounded-b-2xl">
            <div className="space-y-1">
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-white/50 hover:text-black transition-colors font-medium rounded-lg mx-2">Home</a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-white/50 hover:text-black transition-colors font-medium rounded-lg mx-2">Products</a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-white/50 hover:text-black transition-colors font-medium rounded-lg mx-2">About</a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-white/50 hover:text-black transition-colors font-medium rounded-lg mx-2">Contact</a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-white/50 hover:text-black transition-colors font-medium rounded-lg mx-2">Support</a>
              <div className="px-4 pt-4">
                <button className="w-full bg-black text-white px-6 py-3 rounded-full font-medium">
                  Get the app
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;