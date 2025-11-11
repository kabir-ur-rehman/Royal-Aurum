import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { generateProducts, CATEGORIES } from "@/lib/productData";

const Index = () => {
  const [products] = useState(() => generateProducts());
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-secondary/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Where Gold Meets <span className="text-primary">Royalty</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exquisite jewelry collections crafted with unparalleled elegance and timeless beauty
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link to="/categories">
              <Button size="lg" className="shadow-gold hover-scale">
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="hover-scale">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our curated collections</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to={`/categories?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50 mb-3 hover:shadow-gold transition-smooth">
                <img
                  src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop`}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <h3 className="text-center font-semibold group-hover:text-primary transition-smooth">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-secondary/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground">Handpicked pieces for the discerning collector</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/categories">
            <Button size="lg" variant="outline">
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Luxora Promise</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3 p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="font-bold text-xl">Premium Quality</h3>
            <p className="text-muted-foreground">
              Every piece is crafted with the finest materials and meticulous attention to detail
            </p>
          </div>
          <div className="text-center space-y-3 p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="font-bold text-xl">Timeless Design</h3>
            <p className="text-muted-foreground">
              Our collections blend classic elegance with contemporary style
            </p>
          </div>
          <div className="text-center space-y-3 p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-3xl">🎁</span>
            </div>
            <h3 className="font-bold text-xl">Luxury Service</h3>
            <p className="text-muted-foreground">
              White-glove service and complimentary luxury gift packaging
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
    </div>
  );
};

export default Index;
