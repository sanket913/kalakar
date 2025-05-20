import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 p-2 bg-primary-600 rounded-full shadow-lg transition-opacity duration-300 bottom-6 right-6 hover:bg-primary-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;