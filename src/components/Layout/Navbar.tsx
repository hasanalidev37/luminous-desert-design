
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-barber-black/90 backdrop-blur-md border-b border-barber-orange">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-heading text-barber-orange">
            صالون السوداني الأنيق
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-barber-orange" />
            ) : (
              <Menu size={24} className="text-barber-orange" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="navbar-link">الرئيسية</Link>
            <Link to="/about" className="navbar-link">نبذة عنا</Link>
            <Link to="/services" className="navbar-link">الخدمات</Link>
            <Link to="/gallery" className="navbar-link">معرض الأعمال</Link>
            <Link to="/faq" className="navbar-link">الأسئلة الشائعة</Link>
            <Link to="/reviews" className="navbar-link">آراء العملاء</Link>
            <Link to="/book" className="orange-button">احجز موعد</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in">
            <Link to="/" className="navbar-link py-2" onClick={toggleMenu}>الرئيسية</Link>
            <Link to="/about" className="navbar-link py-2" onClick={toggleMenu}>نبذة عنا</Link>
            <Link to="/services" className="navbar-link py-2" onClick={toggleMenu}>الخدمات</Link>
            <Link to="/gallery" className="navbar-link py-2" onClick={toggleMenu}>معرض الأعمال</Link>
            <Link to="/faq" className="navbar-link py-2" onClick={toggleMenu}>الأسئلة الشائعة</Link>
            <Link to="/reviews" className="navbar-link py-2" onClick={toggleMenu}>آراء العملاء</Link>
            <Link to="/book" className="orange-button text-center mt-2" onClick={toggleMenu}>احجز موعد</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
