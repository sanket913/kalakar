import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Award className="w-6 h-6 text-primary-600" />,
      title: 'Expert Instructors',
      description: 'Learn from professional artists with years of teaching experience',
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention with maximum 10 students per class',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: 'Flexible Schedule',
      description: 'Morning, evening and weekend classes to suit your availability',
    },
    {
      icon: <Star className="w-6 h-6 text-primary-600" />,
      title: 'All Materials Included',
      description: 'Quality art supplies provided for all in-studio classes',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white md:py-24" ref={ref}>
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
          >
            About Kalakar Art Academy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-title"
          >
            Where Creativity Comes to Life
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto section-subtitle"
          >
            Founded in 2025, Kalakar Art Academy is dedicated to nurturing artistic talent through
            structured learning, creative exploration, and supportive mentorship.
          </motion.p>
        </div>
        
        <div className="grid gap-8 mt-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[5/4]">
              <img 
                src="/src/assets/images/about.jpg" 
                alt="Art studio at Kalakar Academy" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="absolute p-4 -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-secondary-600">10+ Years Experience</p>
              <p className="text-sm text-gray-600">From our founding instructors</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">Our Philosophy</h3>
            
            <p className="mb-8 text-gray-600">
              At Kalakar, we believe everyone has an artist within. Our mission is to provide a 
              nurturing environment where students of all ages and skill levels can discover and 
              develop their artistic abilities. Through structured learning and creative freedom, 
              we help students build confidence and express their unique vision.
            </p>
            
            <div className="grid gap-6 mt-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-primary-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;