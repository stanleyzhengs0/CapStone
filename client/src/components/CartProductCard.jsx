import { TrashIcon } from 'lucide-react'
import React from 'react'

const CartProductCard = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      {/* Trash Can Icon Button */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
       
      >
        <TrashIcon className="h-5 w-5" />
      </button>

      {/* Image Section */}
      <div className="md:w-1/3">
      image
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-4 md:w-2/3">
        <div>
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">title</h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">rating</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            desc
          </p>
        </div>

        {/* See Details Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            See Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard