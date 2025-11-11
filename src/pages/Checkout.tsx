import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `LX-${Date.now()}`;

    const order = {
      id: orderNumber,
      items: cart,
      total: cartTotal,
      date: new Date().toISOString(),
      status: "Pending",
      paymentMethod,
      deliveryInfo: formData,
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem("luxora_orders") || "[]");
    orders.push(order);
    localStorage.setItem("luxora_orders", JSON.stringify(orders));

    clearCart();
    toast.success(`Order ${orderNumber} placed successfully!`);

    // Redirect to confirmation receipt page
    navigate("/order-confirmation", { state: { order } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Delivery Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <Label>City</Label>
                  <Input name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="md:col-span-2">
                  <Label>Address</Label>
                  <Input name="address" value={formData.address} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit/Debit Card</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-6 h-fit space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="space-y-2 text-sm">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 font-bold text-lg flex justify-between">
              <span>Total</span>
              <span className="text-primary">${cartTotal.toLocaleString()}</span>
            </div>
            <Button type="submit" className="w-full" size="lg">
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
