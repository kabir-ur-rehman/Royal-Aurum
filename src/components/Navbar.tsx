import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import logo from "../../public/assets/logo.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm h-16 flex items-center justify-between px-4">

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Royal Aurum " 
  className="w-24 sm:w-28 md:w-32 h-auto object-contain -my-2"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-smooth">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-smooth">
              About
            </Link>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-secondary rounded-full transition-smooth"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-secondary rounded-full transition-smooth">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm font-medium">{user.name}</span>
                {user.role === "admin" && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">Admin</Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/auth" className="hidden md:block">
                <Button variant="default" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-smooth"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Inline Search Bar */}
        {searchOpen && (
          <div className="mt-3 animate-fade-in">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit">Search</Button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in space-y-3">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <>
                <div className="py-2 text-sm font-medium">Welcome, {user.name}</div>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block py-2 text-sm font-medium hover:text-primary transition-smooth text-left w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="block py-2 text-sm font-medium hover:text-primary transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
