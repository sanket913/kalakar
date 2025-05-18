import { Palette } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-gray-100">
      <div className="container">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div className="col-span-1">
            <img 
            src={logo}
            alt="Kalakar Art Academy Logo" 
            className="h-12 md:h-16"
          />
            <p className="mb-4 text-gray-400">
              Unleash your creative potential and discover the artist within 
              at Mumbai's premier art education center.
            </p>
            <p className="text-gray-400">
              +91 8866742028<br />
              info@kalakarartacademy.com
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#courses" className="hover:text-primary-400">Painting Classes</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Sketching & Drawing</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Creative Expression</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Private Lessons</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary-400">Children's Art Programs</a>
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
                <a href="#" className="hover:text-primary-400">Materials List</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400">Tutorials</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400">Events</a>
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
