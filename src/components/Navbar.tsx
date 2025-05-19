import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', to: '/#home' },
    { name: 'About', to: '/#about' },
    { name: 'Courses', to: '/#courses' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/#contact' },
  ];

  const handleNavClick = (to: string) => {
    if (to === '/gallery') {
      // Navigate directly to gallery page
      navigate('/gallery');
    } else if (to === '/') {
      // Navigate to home page
      navigate('/');
    } else if (to.startsWith('/#') && location.pathname === '/') {
      // Handle smooth scroll on home page
      const elementId = to.substring(2); // Remove the '/# part
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (to.startsWith('/#')) {
      // Navigate to home page with hash
      navigate('/');
      // We need a slight delay to let the page load before scrolling
      setTimeout(() => {
        const elementId = to.substring(2);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const isActive = (to: string) => {
    if (to === '/' && location.pathname === '/' && !window.location.hash) return true;
    if (to === '/gallery' && location.pathname === '/gallery') return true;
    if (to.startsWith('/#') && location.pathname === '/') {
      const hash = window.location.hash;
      return hash === `#${to.substring(2)}`;
    }
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo}
            alt="Kalakar Art Academy Logo" 
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.to)}
              className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300 hover:text-primary-600 
                ${isActive(link.to) 
                  ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary-600' 
                  : 'text-gray-800'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('/#contact')}
            className="ml-2 px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-full transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
          >
            Enroll Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 text-gray-600 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-white bg-opacity-95">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.to)}
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary-600 
                  ${isActive(link.to) ? 'text-primary-600' : 'text-gray-800'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('/#contact')}
              className="mt-2 px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-full transition-all duration-300 hover:bg-primary-700 hover:shadow-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
