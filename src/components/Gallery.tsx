import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Abstract Watercolor',
    },
    {
      image: 'https://images.pexels.com/photos/1478386/pexels-photo-1478386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Oil Landscape',
    },
    {
      image: 'https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Charcoal Portrait',
      
    },
    {
      image: 'https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Acrylic Still Life',
      
    },
    {
      image: 'https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Mixed Media Composition',
      
    },
    {
      image: 'https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Ink Illustration',
     
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
    }
  };
  
  return (
    <section id="gallery" className="py-16 bg-white md:py-24" ref={ref}>
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
          >
            Student Gallery
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-title"
          >
            Inspiring Student Artwork
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto section-subtitle"
          >
            Browse through the gallery showcasing the incredible work created by our talented students.
            These pieces demonstrate the diverse styles and techniques taught at Kalakar Art Academy.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="overflow-hidden transition-all duration-300 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-primary-600 hover:bg-primary-700 hover:-translate-y-1"
          >
            View Full Gallery
          </Link>
        </div>
        
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button 
              className="absolute z-20 p-2 text-white transition-colors rounded-full top-4 right-4 hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute z-20 p-2 text-white transition-colors rounded-full left-4 top-1/2 hover:bg-white/20"
              onClick={() => navigateImage('prev')}
            >
              <ArrowLeft size={24} />
            </button>
            
            <button 
              className="absolute z-20 p-2 text-white transition-colors rounded-full right-4 top-1/2 hover:bg-white/20"
              onClick={() => navigateImage('next')}
            >
              <ArrowRight size={24} />
            </button>
            
            <div className="relative max-w-4xl max-h-[90vh]">
              <img 
                src={galleryItems[selectedImage].image} 
                alt={galleryItems[selectedImage].title}
                className="object-contain max-w-full max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                <h3 className="text-xl font-semibold text-white">{galleryItems[selectedImage].title}</h3>
                <p className="text-sm text-white/80">{galleryItems[selectedImage].student}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
