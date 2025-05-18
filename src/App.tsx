import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Router>
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Courses />
              <Gallery />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </Router>
  );
}

export default App;