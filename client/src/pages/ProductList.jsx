import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const PAGE_SIZE = 20;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/api/v1/products/page?page=${pageNumber}&limit=${PAGE_SIZE}`
        );
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setHasMore(data.hasMore);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
      setLoading(false);
    }
    fetchProducts();
  }, [pageNumber]);

  const getPagination = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (pageNumber <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (pageNumber >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          '...',
          pageNumber - 1,
          pageNumber,
          pageNumber + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 max-w-7xl mx-auto">
        <Header />

        <h1 className="text-[2rem] font-display-semi mb-6">All Products</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              id={p._id}
              title={p.title}
              price={p.price}
              category={p.category}
              product={p}
            />
          ))}
        </div>

        {/* Loading indicator */}
        {loading && (
          <p className="text-center mt-4 text-gray-400">
            Loading more products…
          </p>
        )}

        {/* Pagination Bar */}
        <nav className="flex justify-center mt-8 bg-black/90 py-4 rounded-xl">
          <ul className="flex items-center space-x-2">
            {getPagination().map((page, idx) =>
              page === '...' ? (
                <li key={idx}>
                  <span className="px-2 text-gray-500 select-none">…</span>
                </li>
              ) : (
                <li key={idx}>
                  <button
                    onClick={() => setPageNumber(page)}
                    disabled={page === pageNumber}
                    className={`
                      px-3 py-1 rounded-full font-medium
                      ${page === pageNumber
                        ? 'text-black'
                        : 'text-white hover:bg-white/20'}
                    `}
                  >
                    {page}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
        <Footer />
      </div>
    </div>
  );
}
