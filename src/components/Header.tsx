import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-tr from-sky-400 to-fuchsia-800 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-15 h-15  rounded-lg flex items-center justify-center mr-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain rounded-sm"
              />
            </div>
            <span className="text-xl font-bold text-gray-50">Renex_Design</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-50 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/renex_design" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-50 hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenContact}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-50 hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden ">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-50 hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <a 
                  href="https://www.instagram.com/renex_design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-50-700 hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @renex_design
                </a>
                <button
                  onClick={() => {
                    onOpenContact();
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;