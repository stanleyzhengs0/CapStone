import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const pages = [1, 2, 3];
        const responses = await Promise.all(
          pages.map((p) =>
            fetch(`http://localhost:3000/api/v1/products/page/${p}`)
          )
        );

        const payloads = await Promise.all(responses.map((r) => r.json()));

        const merged = payloads.flat();
        setProducts(merged);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    })();
  }, []); 

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image || "https://placehold.co/600x800?text=Image"}
              category={p.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
