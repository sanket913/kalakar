import { Palette } from 'lucide-react';
import ilogo from '../assets/images/ilogo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-gray-100">
      <div className="container">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div className="col-span-1">
            <img 
            src={ilogo}
            alt="Kalakar Art Academy Logo" 
            className="h-12 md:h-16"
          />
            <p className="mb-4 text-gray-400">
              Unleash your creative potential and discover the artist within 
              at Mumbai's premier art education center.
            </p>
            <p className="text-gray-400">
              +91 8866742028<br />
              kalakarartacademy@gmail.com
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#courses" className="hover:text-primary-400">Art Fundamentals</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Artistic Development & Mediums</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Artistic Mastery & Self Expression</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-400">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Kalakar Art Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
