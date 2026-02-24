import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-secondary/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="text-brand-primary w-8 h-8" />
            <span className="text-2xl font-serif font-bold text-brand-primary tracking-tight">VitalCrush</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-primary",
                  location.pathname === link.path ? "text-brand-primary border-b-2 border-brand-primary" : "text-stone-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Inquiry Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-secondary border-b border-stone-200 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif text-stone-800"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="block bg-brand-primary text-white text-center py-3 rounded-xl"
          >
            Inquiry Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Leaf className="text-brand-accent w-6 h-6" />
            <span className="text-xl font-serif font-bold">VitalCrush</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading exporter and manufacturer of high-quality dehydrated vegetable powders and flakes. Committed to purity and health.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Our Products</Link></li>
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-6">Products</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Onion Powder</Link></li>
            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Garlic Powder</Link></li>
            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Beetroot Powder</Link></li>
            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Spinach Powder</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>123 Agri Export Zone, Navi Mumbai, Maharashtra, India</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <span>info@vegpure.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-center text-xs opacity-50">
        © {new Date().getFullYear()} VitalCrush Ayurvedic & Fruit Powders. All rights reserved.
      </div>
    </footer>
  );
};
