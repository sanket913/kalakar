import { motion } from 'framer-motion';
import { useState } from 'react';
import gallery7 from '../assets/images/gallery7.jpg';
import gallery8 from '../assets/images/gallery8.jpg';
import gallery9 from '../assets/images/gallery9.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
import gallery11 from '../assets/images/gallery11.jpg';
import gallery12 from '../assets/images/gallery12.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery14 from '../assets/images/gallery14.jpg';
import gallery15 from '../assets/images/gallery15.jpg';
import gallery16 from '../assets/images/gallery16.jpg';
import gallery17 from '../assets/images/gallery17.jpg';
import gallery18 from '../assets/images/gallery18.jpg';
import gallery19 from '../assets/images/gallery19.jpg';
import gallery20 from '../assets/images/gallery20.jpg';
import gallery21 from '../assets/images/gallery21.jpg';
import gallery22 from '../assets/images/gallery22.jpg';
import gallery23 from '../assets/images/gallery23.jpg';
import gallery24 from '../assets/images/gallery24.jpg';
import gallery25 from '../assets/images/gallery25.jpg';
import gallery26 from '../assets/images/gallery26.jpg';
import gallery27 from '../assets/images/gallery27.jpg';
import gallery28 from '../assets/images/gallery28.jpg';
import gallery29 from '../assets/images/gallery29.jpg';
import gallery30 from '../assets/images/gallery30.jpg';

const categories = [
  {
    id: 'sketches',
    title: 'Sketches & Drawings',
    description: 'Pencil, charcoal, and ink artworks showcasing various techniques and styles.',
    images: [
      gallery7,
      gallery8,
      gallery9,
      gallery10,
      gallery11,
      gallery12,
      gallery13,
    ]
  },
  {
    id: 'paintings',
    title: 'Paintings',
    description: 'Oil, acrylic, and watercolor paintings exploring color and composition.',
    images: [
      gallery14,
      gallery15,
      gallery16,
      gallery17,
      gallery18,
      gallery19,
      gallery20,
    ]
  },
  {
    id: 'workshops',
    title: 'Workshop Creations',
    description: 'Artworks created during our specialized workshops and events.',
    images: [
      gallery21,
      gallery22,
      gallery23,
      gallery24,
      gallery25,
      gallery26,
      gallery27,
      gallery28,
      gallery29,
      gallery30,
    ]
  },
  
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-24">
        <div className="mb-12">
          <h1 className="mt-8 text-4xl font-bold md:text-5xl">Art Gallery</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our students' creative journey through various art forms and achievements.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: selectedCategory === category.id ? 1 : 0,
              display: selectedCategory === category.id ? 'block' : 'none'
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="mt-2 text-gray-600">{category.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden bg-white rounded-lg shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={image}
                      alt={`${category.title} artwork ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;