import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ProductCardPlaceholder from '../components/PlaceholderCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
        <Header />
        <SearchBar />
        <Hero />
        {/* placeholder grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, idx) => (
                <ProductCardPlaceholder key={idx} />
              ))}
            </div>
          </div>
        </section>
        <Quote /> 
        <Footer />
    </div>
  )
}

export default Home

