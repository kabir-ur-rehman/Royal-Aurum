import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Royal Aurum Jewels" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Where Gold Meets Royalty. Discover exquisite jewelry that defines elegance.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 hover:bg-primary/10 rounded-full transition-smooth">
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-full transition-smooth">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-full transition-smooth">
                <Twitter className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Shipping & Returns</li>
              <li className="text-sm text-muted-foreground">Size Guide</li>
              <li className="text-sm text-muted-foreground">Care Instructions</li>
              <li className="text-sm text-muted-foreground">Privacy Policy</li>
              <li className="text-sm text-muted-foreground">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@Royal Aurum.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Royal Aurum . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
