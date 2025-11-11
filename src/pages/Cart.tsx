import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Empty Cart View
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#f9f4ef]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="space-y-6">
            <ShoppingBag className="h-20 w-20 mx-auto text-[#B28C67]" />
            <h2 className="text-3xl font-bold text-gray-800">Your cart is empty</h2>
            <p className="text-gray-500">Start shopping to add beautiful items to your cart ✨</p>
            <Link to="/categories">
              <Button
                size="lg"
                className="bg-[#B28C67] hover:bg-[#9c7858] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition"
              >
                Browse Collection
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Cart View
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#f9f4ef]">
      <Navbar />

      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-[#B28C67]">
          🛍️ Your Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-[#e8dfd5] shadow-md rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="sm:w-1/4 w-full overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300 rounded-xl"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/assets/placeholder.jpg";
                    }}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.material}</p>
                  <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  <p className="text-xl font-bold text-[#B28C67]">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col justify-between items-end space-y-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-[#B28C67] hover:bg-[#f6eee7]"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>

                  <div className="flex items-center space-x-2 bg-[#f6eee7] rounded-full px-3 py-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:bg-[#e9dfd5]"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full hover:bg-[#e9dfd5]"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-[#e8dfd5] bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-800">
                  <span>Total</span>
                  <span className="text-[#B28C67]">${cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout" className="block">
                <Button
                  size="lg"
                  className="w-full bg-[#B28C67] hover:bg-[#9c7858] text-white rounded-full py-3 shadow-md hover:shadow-lg transition"
                >
                  Proceed to Checkout
                </Button>
              </Link>

              <Link to="/categories" className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-[#d6c6b5] hover:bg-[#f8f3ed] text-[#B28C67]"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
