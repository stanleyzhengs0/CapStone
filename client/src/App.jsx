import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Quote from './components/Quote';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar />
      <Hero />
      <ProductGrid />
      <Quote /> 
      <Footer />
    </div>
  );
}

export default App;