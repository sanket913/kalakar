import { motion } from 'framer-motion';
import { Paintbrush, Palette, PencilRuler } from 'lucide-react';
import hero from '../assets/images/hero-profile.png';

const Hero: React.FC = () => {
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
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Unleash Your Creative
              <span className="relative ml-3">
                <span className="relative z-10 text-primary-600">Potential</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary-200 -z-0"></span>
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Discover the artist within you at Kalakar Art Academy. Our expert instructors
              guide you through painting, sketching, and drawing techniques in a supportive 
              creative environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="btn btn-primary">
                Explore Courses
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100">
                  <Paintbrush className="text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Painting</h3>
              </div>
              
              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100">
                  <PencilRuler className="text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">Sketching</h3>
              </div>
              
              <div className="p-4 text-center bg-white rounded-lg shadow-sm">
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
        
              <img 
                src={hero} 
                alt="Kalakar Art Academy Logo" 
                className="object-contain w-full h-full"
              />

            
            <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg w-40 md:w-48">
              <p className="font-semibold text-secondary-600">All Skill Levels</p>
              <p className="text-sm text-gray-600">Beginners welcome</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
