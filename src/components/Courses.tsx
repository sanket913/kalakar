import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, PencilRuler, Paintbrush, Clock, Award } from 'lucide-react';

const Courses: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      title: 'Level 1: Basic Course',
      subtitle: 'Art Foundations',
      description: 'Develop foundational drawing, coloring, and composition skills to enhance creativity and artistic expression, exploring line work, geometric shapes, color theory, shading, and imaginative designs.',
      image: 'https://images.pexels.com/photos/6615294/pexels-photo-6615294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { icon: <Clock size={16} />, text: '1-2 months' },
        { icon: <Award size={16} />, text: 'Certificate included' },
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <PencilRuler className="w-6 h-6 text-white" />,
      title: 'Level 2: Intermediate Course',
      subtitle: 'Skill Building & Techniques',
      description: 'Develop your observational skills and technical abilities in pencil, charcoal, and ink drawing. Learn perspective, shading, and realistic rendering.',
      image: 'https://images.pexels.com/photos/3004109/pexels-photo-3004109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { icon: <Clock size={16} />, text: '1.5-2.5 months' },
        { icon: <Award size={16} />, text: 'Certificate included' },
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: 'Level 3: Advanced Course',
      subtitle: 'Artistic Mastery & Self Expression',
      description: 'Master advanced sketching, dynamic figure drawing, and professional painting techniques, including knife painting and mixed media. Explore resin, glass, and bottle art while learning to price, sell, and exhibit your artwork professionally.',
      image: 'https://images.pexels.com/photos/4889069/pexels-photo-4889069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        { icon: <Clock size={16} />, text: '2-3 months' },
        { icon: <Award size={16} />, text: 'Gallery exhibition' },
      ],
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50 md:py-24" ref={ref}>
  <div className="container">
    <div className="text-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
      >
        Our Courses
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 section-title"
      >
        Discover Your Artistic Journey
      </motion.h2>
    </div> {/* <-- This was missing */}

    <div className="grid gap-8 mt-16 lg:grid-cols-3">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          className="overflow-hidden bg-white rounded-lg shadow-lg"
        >
          <div className="relative h-56">
            <img
              src={course.image}
              alt={course.title}
              className="object-cover w-full h-full"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-80`}
            ></div>
            <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full h-full p-6 text-white">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold">{course.title}</h3>
              <h5 className="text-lg">{course.subtitle}</h5>
            </div>
          </div>

          <div className="p-6">
            <p className="mb-4 text-gray-600">{course.description}</p>

            <div className="flex flex-wrap gap-4 mt-6">
              {course.features.map((feature, fidx) => (
                <div key={fidx} className="flex items-center gap-2 text-sm text-primary-600">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="/#contact" className="w-full text-center btn btn-primary">
                Enroll Now
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div> {/* <-- Properly closing the main container */}
</section>

  );
};

export default Courses;
