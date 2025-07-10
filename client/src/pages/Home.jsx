import React from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SearchBar />
      <Hero />
      <ProductGrid />
      <Footer/>
    </>
  );
}
