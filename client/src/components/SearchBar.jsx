import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState(""); // User input
  const [results, setResults] = useState([]); // Search results

  // Function to fetch search results from API
  const fetchSearchResults = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(`http://localhost:3000/api/v1/products/search?input=${query}`);
      const data = await response.json();
      
      if (data && data.products) {
        setResults(data.products); // Update results with fetched products
      } else {
        setResults([]); // Clear results if no data or products are found
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  // Fetch results on every keypress
  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update the query state

    if (value.trim().length >= 3) {
      fetchSearchResults(value); // Fetch results if query length >= 3
    } else {
      setResults([]); // Clear results if query is shorter than 3 characters
    }
  };

  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <form
          className="glass w-full max-w-3xl mx-auto flex items-center gap-3 px-6 py-4 text-white focus-within:ring-2 focus-within:ring-pink-500 transition-shadow"
          onSubmit={(e) => e.preventDefault()} // Prevent form submission
        >
          <Search className="h-5 w-5 shrink-0 text-white/70" />

          <input
            name="query"
            type="text"
            placeholder="Search products…"
            value={query}
            onChange={handleQueryChange} // Capture user input and fetch results
            className="flex-1 bg-transparent outline-none placeholder:text-white/60 text-white font-medium"
          />
        </form>

        {/* Display autocomplete results */}
        {query.trim().length >= 3 && (
          <div className="mt-4 bg-gray-600 bg-opacity-75 rounded-lg p-4 max-h-64 overflow-y-auto w-full max-w-3xl mx-auto">
            <ul>
              {results.length > 0 ? (
                results.map((result) => (
                  <li key={result._id} className="py-2 cursor-pointer hover:bg-gray-700">
                    <a href={`/products/${result._id}`} className="text-white">
                      {result.title}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
