import React from "react";
import { ArrowRight } from "lucide-react"; 

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Product",
      price: "$$",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      category: "",
    },
    {
      id: 2,
      name: "Product",
      price: "$$",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      category: "",
    },
    {
      id: 3,
      name: "Product",
      price: "$$",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      category: "",
    },
    {
      id: 4,
      name: "Product",
      price: "$$",
      image:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
      category: "",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`
                group relative overflow-hidden rounded-3xl
                shadow-lg hover:shadow-xl transition-all duration-300
                h-[400px]                          /* fixed height */
                ${index % 3 === 0 ? "lg:row-span-2" : ""}
                ${index === 1 || index === 4 ? "md:row-span-2" : ""}
              `}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* dark-to-transparent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* info card */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display-semi text-black text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="font-display-regular text-gray-600 text-sm mb-0">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
