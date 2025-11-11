import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";

// 🧩 Pages
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import OrderConfirmation from "@/pages/OrderConfirmation";
import ProductDetails from "@/pages/ProductDetails";

// 🧩 Admin Pages
import AdminPage from "@/pages/admin/AdminPage";
import Dashboard from "@/pages/admin/Dashboard";
import Orders from "@/pages/admin/Orders";
import Product from "@/pages/admin/Products";
import Customers from "./pages/admin/customers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* 🌐 Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/product/:id" element={<ProductDetails />} />

              {/* 🧩 Admin nested routes */}
              <Route path="/admin" element={<AdminPage />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />

                   <Route path="Product" element={<Product />} />
                   <Route path="customer" element={<Customers />} />



              </Route>

              {/* 🚫 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
