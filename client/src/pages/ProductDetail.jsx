import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccordionCard from "../components/AccordionCard";  
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductDetail() {
  const { id } = useParams();
  console.log(id)
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  const navigate = useNavigate();

  useEffect(() => {
    if (product) return;
    (async () => {
      try {
        const res = await fetch(` http://localhost:3000/api/v1/products/product?id=${id}`);
        const data = await res.json();
        console.log(data)
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    })();
  }, [id, product]);

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

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Adds the product to the cart
    toast.success(`Successfully added!`);
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-[60vh] lg:h-full object-cover opacity-70"
          />
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col gap-6">
          <span className="inline-block self-start rounded-full border border-pink-500/70 bg-pink-800/40 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            {category}
          </span>

          <h1 className="text-4xl font-display-header leading-tight">{title}</h1>
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

          <p className="text-lg text-gray-300 max-w-prose">{description}</p>

          <buttom
            onClick={handleAddToCart}
          >
            Add to Cart
          </buttom>

          {/* Review Accordion */}
          {reviewList.length > 0 && (
            <div className="mt-8 space-y-4">
              <h2 className="text-xl mb-3 font-semibold">Reviews</h2>
              {reviewList.map((r, idx) => (
                <AccordionCard
                  key={idx}
                  title={`Review ${idx + 1}`}
                >
                  {r}
                </AccordionCard>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
