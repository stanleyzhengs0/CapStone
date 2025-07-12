import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccordionCard from "../components/AccordionCard";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState(location.state?.product || null);
  const [recs, setRecs] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) return;
    (async () => {
      try {
        const r = await fetch(
          `http://localhost:3000/api/v1/products/product?id=${id}`
        );
        setProduct(await r.json());
      } catch (e) {
        console.error("Failed to load product:", e);
      }
    })();
  }, [id, product]);

  useEffect(() => {
    if (!id) return;
    const ctrl = new AbortController();
    fetch(`http://localhost:5000/api/recommendations?_id=${id}`, {
      signal: ctrl.signal,
    })
      .then((r) => r.json())
      .then(setRecs)
      .catch((e) => {
        if (e.name !== "AbortError") console.error("Failed to load recs:", e);
      });
    return () => ctrl.abort();
  }, [id]);

   if (!product) return null;
  const {
    title,
    price,
    description,
    category,
    image,
    number_of_reviews,
    average_rating,
    reviews,
  } = product;
  const reviewList = reviews ? reviews.split("|") : [];
  const stars = Array.from({ length: 5 }, (_, i) => i < average_rating);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Successfully added!", {
      style: { fontFamily: "var(--font-display-text)" },
    });
  };

  return (
    <>
      <Header />

      <section className="bg-black text-white flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 flex justify-center">
          <div
            className="
              relative w-full h-[60vh] lg:h-full
              rounded-3xl border border-white/10
              bg-gradient-to-br from-white/5 via-white/0 to-white/5
              overflow-hidden flex items-center justify-center
            "
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />

            <span className="relative z-20 text-white/30 text-lg pointer-events-none">
              Image
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col gap-6">
          <span className="inline-block self-start rounded-full border border-pink-500/70 bg-pink-800/40 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            {category}
          </span>

          <h1 className="text-4xl font-display-header leading-tight">
            {title}
          </h1>
          <p className="text-2xl font-display-text">${price.toFixed(2)}</p>

          <div className="flex items-center gap-2">
            {stars.map((filled, idx) => (
              <Star
                key={idx}
                className={`w-5 h-5 ${
                  filled
                    ? "fill-yellow-400 stroke-yellow-400"
                    : "stroke-gray-600"
                }`}
              />
            ))}
            <span className="text-sm text-gray-400">
              ({number_of_reviews})
            </span>
          </div>

          <p className="text-lg font-display-light text-gray-300 max-w-prose">
            {description}
          </p>

          <button
            onClick={handleAddToCart}
            className="self-start rounded-lg bg-pink-600 px-6 py-2 font-semibold hover:bg-pink-700"
          >
            Add to Cart
          </button>
        </div>
      </section>

      {/* Recommendations */}
      {recs.length > 0 && (
        <section className="bg-black text-white px-8 py-8">
          <h2 className="text-3xl font-display-semi mb-6">
            Similar items you might like
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recs.map((p) => (
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
        </section>
      )}

      {/* About & Reviews */}
      <section className="bg-black text-white px-8 py-12">
        <h2 className="text-xl font-display-semi mb-6">About this product</h2>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 space-y-4 md:pr-6 font-display-text">
            {[
              "Product details",
              "Specifications",
              "Directions",
              "Warranty",
              "About the brand",
            ].map((label) => (
              <AccordionCard key={label} title={label}>
                <p className="text-gray-300 leading-relaxed">
                  Placeholder text — information coming soon.
                </p>
              </AccordionCard>
            ))}
          </div>

          <div className="my-8 md:my-0 md:mx-6 h-0.5 bg-pink-600 md:h-auto md:w-1" />

          {reviewList.length > 0 && (
            <div className="flex-1 font-display-text">
              <AccordionCard title="Reviews">
                <div className="space-y-4">
                  {reviewList.map((r, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed">
                      {r}
                    </p>
                  ))}
                </div>
              </AccordionCard>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
