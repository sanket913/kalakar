import { motion } from 'framer-motion';
import { Paintbrush, Palette, PencilRuler } from 'lucide-react';
import heroVideo1 from '../assets/images/hero-video1.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-12 overflow-hidden md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 lg:min-h-screen lg:flex lg:items-center">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-texture bg-repeat"></div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="mb-4 text-center hindi-headline lg:text-left sm:mb-6">
              <h1 className="text-3xl font-bold leading-tight tracking-wide text-gray-900 font-hindi sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                हर घर में छुपा है
              </h1>
              <div className="mt-2 md:mt-3">
                <span className="block text-2xl font-bold text-primary-600 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  एक कलाकार
                </span>
              </div>
            </div>

            <p className="mb-6 text-base text-center text-gray-600 lg:text-left sm:text-lg md:text-xl lg:mb-8">
              At Kalakar Art Academy, we help you discover your inner artist one stroke at a time. Discover the world of Sketching, Drawing, Painting, and Creative Art — from beginners to advanced levels.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 lg:justify-start md:mb-10">
              <a href="#courses" className="px-5 py-2.5 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700 text-sm sm:text-base sm:px-6 sm:py-3">
                Explore Courses
              </a>
              <a href="#contact" className="px-5 py-2.5 font-medium transition-colors border rounded-lg text-primary-600 border-primary-600 hover:bg-primary-50 text-sm sm:text-base sm:px-6 sm:py-3">
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="p-3 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 sm:p-4">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-primary-100 sm:w-12 sm:h-12 sm:mb-3">
                  <Paintbrush className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">Painting</h3>
              </div>

              <div className="p-3 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 sm:p-4">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-primary-100 sm:w-12 sm:h-12 sm:mb-3">
                  <PencilRuler className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">Sketching</h3>
              </div>

              <div className="p-3 text-center bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 sm:p-4">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full bg-primary-100 sm:w-12 sm:h-12 sm:mb-3">
                  <Palette className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">Drawing</h3>
              </div>
            </div>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 flex flex-col items-center justify-center mb-8 lg:mb-0 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-full">
              <video
                id="hero-video"
                src={heroVideo1}
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute hidden top-16 right-0 w-48 h-48 md:block md:w-64 md:h-64 rounded-full bg-primary-100/30 blur-3xl -z-10"></div>
      <div className="absolute hidden bottom-16 left-0 w-48 h-48 md:block md:w-64 md:h-64 rounded-full bg-primary-100/30 blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
