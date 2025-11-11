import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/lib/productData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card
      className="group overflow-hidden cursor-pointer hover:shadow-gold transition-smooth relative"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary/50 relative">
    <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg";
  }}
/>


        {/* 👁 View button - only visible on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <Link to={`/product/${product.id}`}>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full shadow-lg bg-white/80 hover:bg-white"
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.material}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            ₨{product.price.toLocaleString()}
          </span>
          <Button size="sm" onClick={handleAddToCart} className="hover-scale">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
