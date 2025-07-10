import React from 'react';
import '../App.jsx';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display-medium text-white text-[1.25rem] mb-4">Get to Know Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display-medium text-white text-[1.25rem] mb-4">Payment Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Visa</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Store Card</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Shop with Points</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display-medium text-white text-[1.25rem] mb-4">Let Us Help You</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Your Account</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Your Orders</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Shipping Rates & Policies</a></li>
              <li><a href="#" className="font-display-medium text-[#ffffffb3] hover:text-white transition-colors">Return & Replacements</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Travelers Trailblazers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;