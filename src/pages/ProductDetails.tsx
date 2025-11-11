import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateProducts } from "@/lib/productData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // <-- navigate hook
  const products = generateProducts();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product); // add product to cart
    navigate("/checkout"); // redirect to checkout page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#f8f4f0]">
      <Navbar />

      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl border border-[#e2d6c5]">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-3xl w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/placeholder.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            <div className="space-y-1 text-gray-600">
              <p>
                <span className="font-semibold text-[#B28C67]">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold text-[#B28C67]">Subcategory:</span>{" "}
                {product.subcategory}
              </p>
              <p>
                <span className="font-semibold text-[#B28C67]">Material:</span>{" "}
                {product.material}
              </p>
              <p>
                <span className="font-semibold text-[#B28C67]">SKU:</span>{" "}
                {product.sku}
              </p>
            </div>

            <p className="text-3xl font-semibold text-[#B28C67]">
              ₨ {product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="pt-6 flex gap-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="bg-[#B28C67] hover:bg-[#9d7b57] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow} // <-- connected Buy Now
                variant="outline"
                size="lg"
                className="rounded-full border-[#B28C67] text-[#B28C67] hover:bg-[#B28C67] hover:text-white transition-all"
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
