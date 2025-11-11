import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { generateProducts } from "@/lib/productData";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products] = useState(() => generateProducts());
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.material.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Search Header */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Search Jewelry</h1>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Search for rings, necklaces, materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        {/* Results */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              {searchResults.length} results for <strong>"{searchQuery}"</strong>
            </p>
          </div>
        )}

        {/* Products Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No products found matching your search.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try different keywords or browse our categories.
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <SearchIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">
              Start searching for your perfect piece
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
