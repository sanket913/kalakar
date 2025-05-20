import { motion } from 'framer-motion';
import { Paintbrush, Palette, PencilRuler } from 'lucide-react';
import hero from '../assets/images/hero-profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden md:pt-40 md:pb-24 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 z-0 opacity-10 bg-texture bg-repeat"></div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 hindi-headline">
              <h1 className="text-4xl font-bold leading-tight tracking-wide text-gray-900 font-hindi md:text-5xl lg:text-6xl xl:text-7xl">
                हर घर में छुपा है
              </h1>
              <div className="mt-3 md:mt-4">
                <span className="block text-3xl font-bold text-primary-600 md:text-4xl lg:text-5xl xl:text-6xl">
                  एक कलाकार
                </span>
              </div>
            </div>
            
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              At Kalakar Art Academy, we help you discover your inner artist one stroke at a time. Discover the world of Sketching, Drawing, Painting, and Creative Art — from beginners to advanced levels.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="px-6 py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700">
                Explore Courses
              </a>
              <a href="#contact" className="px-6 py-3 font-medium transition-colors border rounded-lg text-primary-600 border-primary-600 hover:bg-primary-50">
                Contact Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
              <div className="p-4 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100">
                  <Paintbrush className="text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Painting</h3>
              </div>
              
              <div className="p-4 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100">
                  <PencilRuler className="text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Sketching</h3>
              </div>
              
              <div className="p-4 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100">
                  <Palette className="text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Drawing</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={hero}
                alt="Kalakar Art Academy Logo"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-16 right-0 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-16 left-0 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;