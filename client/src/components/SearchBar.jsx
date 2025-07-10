import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <form
          className="
            glass                      /* ← the utility you added in index.css */
            w-full max-w-3xl mx-auto   /* center and cap width */
            flex items-center gap-3
            px-6 py-4
            text-white
            focus-within:ring-2 focus-within:ring-pink-500
            transition-shadow
          "
          onSubmit={(e) => {
            e.preventDefault();
            /* TODO: handle query */
          }}
        >
          <Search className="h-5 w-5 shrink-0 text-white/70" />

          <input
            name="query"
            type="text"
            placeholder="Search products…"
            className="
              flex-1 bg-transparent outline-none
              placeholder:text-white/60
              text-white font-medium
            "
          />
        </form>
      </div>
    </div>
  );
}
