import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'sketches',
    title: 'Sketches & Drawings',
    description: 'Pencil, charcoal, and ink artworks showcasing various techniques and styles.',
    images: [
      'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'paintings',
    title: 'Paintings',
    description: 'Oil, acrylic, and watercolor paintings exploring color and composition.',
    images: [
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1478386/pexels-photo-1478386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'workshops',
    title: 'Workshop Creations',
    description: 'Artworks created during our specialized workshops and events.',
    images: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3183141/pexels-photo-3183141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  },
  {
    id: 'achievements',
    title: 'Student Achievements',
    description: 'Award-winning pieces and notable student accomplishments.',
    images: [
      'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ]
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-24">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            ← Back to Home
          </Link>
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