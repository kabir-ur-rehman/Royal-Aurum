import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { generateProducts, CATEGORIES, MATERIALS } from "@/lib/productData";
import { Product } from "@/lib/productData";

const ITEMS_PER_PAGE = 24;

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products] = useState(() => generateProducts());
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCategory = searchParams.get("category");
  const selectedSubcategory = searchParams.get("subcategory");
  const selectedMaterial = searchParams.get("material");
  const priceRange = searchParams.get("price");

  const categoryData = CATEGORIES.find((c) => c.name === selectedCategory);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter((p) => p.subcategory === selectedSubcategory);
    }

    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    return filtered;
  }, [products, selectedCategory, selectedSubcategory, selectedMaterial, priceRange]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const setFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchParams({});
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {selectedCategory || "All Categories"}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        {!selectedCategory && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select a Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setFilter("category", category.name)}
                  className="p-4 border rounded-lg hover:border-primary hover:shadow-gold transition-smooth text-center"
                >
                  <h3 className="font-semibold">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-8">
          {categoryData && (
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Subcategories
              </h3>
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex gap-2 pb-4">
                  <Badge
                    variant={!selectedSubcategory ? "default" : "outline"}
                    className="cursor-pointer hover-scale"
                    onClick={() => setFilter("subcategory", null)}
                  >
                    All
                  </Badge>
                  {categoryData.subcategories.map((sub) => (
                    <Badge
                      key={sub}
                      variant={selectedSubcategory === sub ? "default" : "outline"}
                      className="cursor-pointer hover-scale"
                      onClick={() => setFilter("subcategory", sub)}
                    >
                      {sub}
                    </Badge>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          )}

          {/* Material Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Materials</h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={!selectedMaterial ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("material", null)}
              >
                All Materials
              </Badge>
              {MATERIALS.map((material) => (
                <Badge
                  key={material}
                  variant={selectedMaterial === material ? "default" : "outline"}
                  className="cursor-pointer hover-scale"
                  onClick={() => setFilter("material", material)}
                >
                  {material}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Price Range</h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={!priceRange ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("price", null)}
              >
                All Prices
              </Badge>
              <Badge
                variant={priceRange === "0-1000" ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("price", "0-1000")}
              >
                Under $1,000
              </Badge>
              <Badge
                variant={priceRange === "1000-3000" ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("price", "1000-3000")}
              >
                $1,000 - $3,000
              </Badge>
              <Badge
                variant={priceRange === "3000-5000" ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("price", "3000-5000")}
              >
                $3,000 - $5,000
              </Badge>
              <Badge
                variant={priceRange === "5000-10000" ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setFilter("price", "5000-10000")}
              >
                $5,000+
              </Badge>
            </div>
          </div>

          {(selectedCategory || selectedSubcategory || selectedMaterial || priceRange) && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear All Filters
            </Button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5) {
                  if (currentPage > 3) {
                    pageNum = currentPage - 2 + i;
                  }
                  if (currentPage > totalPages - 3) {
                    pageNum = totalPages - 4 + i;
                  }
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    size="sm"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
