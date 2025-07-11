import React, { useEffect, useState } from 'react';
import ProductListCard from '../components/ProductListCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there are more products
  const [totalPages, setTotalPages] = useState(1); // Total number of pages for pagination

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/v1/products/page?page=${pageNumber}&limit=8`);
        const data = await response.json();

        // Replace the existing product list with new data
        setProducts(data.products);
        setTotalPages(data.totalPages); // Total pages for pagination
        setHasMore(data.hasMore); // Determine if there are more products to load
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setLoading(false);
    }

    fetchProducts();
  }, [pageNumber]);

  // Handle Next and Previous buttons
  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(prev => prev + 1); // Move to the next page
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prev => prev - 1); // Go back to the previous page
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <ProductListCard
            key={product.id}
            id = {product._id}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            number_of_reviews={product.number_of_reviews}
            average_rating={product.average_rating}
          />
        ))}
      </div>

      {loading && <p className="text-center my-4">Loading...</p>}

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={pageNumber === 1} // Disable if already on the first page
          className={`px-4 py-2 rounded-full border-2 ${pageNumber === 1 ? 'text-gray-400' : 'text-black border-gray-300 hover:bg-gray-100'}`}
        >
          ← Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={!hasMore} // Disable if there are no more products to load
          className={`px-4 py-2 rounded-full border-2 ${!hasMore ? 'text-gray-400' : 'text-black border-gray-300 hover:bg-gray-100'}`}
        >
          Next →
        </button>
      </div>

      {!hasMore && !loading && (
        <p className="text-center my-4 text-gray-500">No more products to display.</p>
      )}
    </div>
  );
};

export default ProductList;
