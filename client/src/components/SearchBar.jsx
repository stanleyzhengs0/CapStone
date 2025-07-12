import React, { useState } from "react";
import { Search } from "lucide-react";
import "../styles/glass-search.css";   // adjust path if needed

export default function SearchBar() {
  const [query, setQuery]     = useState("");
  const [results, setResults] = useState([]);

  async function fetchSearchResults(q) {
    if (!q.trim()) return;
    try {
      const r   = await fetch(`http://localhost:3000/api/v1/products/search?input=${q}`);
      const dat = await r.json();
      setResults(dat?.products || []);
    } catch (err) {
      console.error("search error:", err);
      setResults([]);
    }
  }

  function handleQueryChange(e) {
    const v = e.target.value;
    setQuery(v);
    v.trim().length >= 3 ? fetchSearchResults(v) : setResults([]);
  }

  return (
    <div style={{ background: "black" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* glass search bar */}
        <form
          className="search-glass"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search size={20} />

          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleQueryChange}
          />
        </form>

        {/* autocomplete list */}
        {query.trim().length >= 3 && (
          <div
            className="search-results"
            style={{ maxWidth: "48rem", margin: "1rem auto 0" }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {results.length ? (
                results.map((p) => (
                  <li key={p._id}>
                    <a href={`/products/${p._id}`}>{p.title}</a>
                  </li>
                ))
              ) : (
                <li style={{ color: "#9ca3af" }}>No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
