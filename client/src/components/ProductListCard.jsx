import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductListCard = ({ id, title, category, description, price, number_of_reviews, average_rating }) => {

  
  // const { addToCart } = useCartCart();

  // const handleAddToCart = () => {
  //   addToCart(product); // Adds the product to the cart
  //   toast.success(`Successfully added!`);
  // };
  return (
    <div className="bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-gray-700 mt-4">{description.slice(0, 100)}...</p>
        <p className="mt-4 text-xl font-bold text-black">${price.toFixed(2)}</p>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <p>{number_of_reviews} reviews</p>
          <p>⭐ {average_rating}</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 flex justify-center items-center">
      <Link to={`/product/${id}`}>
         <button className="px-4 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition">
          View Details
        </button>   
      </Link>

          {/* <buttom
            onClick={handleAddToCart}
          >
            Add to Cart
          </buttom> */}
        
      </div>
    </div>
  );
};

export default ProductListCard;
