import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Star } from 'lucide-react';
import about from '../assets/images/about.jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Award className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />,
      title: 'Expert Instructors',
      description: 'Learn from professional artists with years of teaching experience',
    },
    {
      icon: <Users className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />,
      title: 'Small Class Sizes',
      description: 'Personalized attention with maximum 10 students per class',
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />,
      title: 'Flexible Schedule',
      description: 'Morning, evening and weekend classes to suit your availability',
    },
    {
      icon: <Star className="w-5 h-5 text-primary-600 sm:w-6 sm:h-6" />,
      title: 'All Materials Included',
      description: 'Quality art supplies provided for all in-studio classes',
    },
  ];

  return (
    <section id="about" className="py-12 bg-white sm:py-16 md:py-20 lg:py-24" ref={ref}>
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium rounded-full sm:text-sm sm:px-4 bg-primary-100 text-primary-800"
          >
            About Kalakar Art Academy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl"
          >
            Where Creativity Comes to Life
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-3 text-sm text-gray-600 sm:text-base md:text-lg sm:mt-4"
          >
            Founded in 2025, Kalakar Art Academy is dedicated to nurturing artistic talent through
            structured learning, creative exploration, and supportive mentorship.
          </motion.p>
        </div>
        
        <div className="grid gap-8 mt-10 sm:mt-12 md:mt-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[5/4] max-w-lg mx-auto">
              <img 
                src={about} 
                alt="Art studio at Kalakar Academy" 
                className="object-cover w-full h-full"
              />
            </div>
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            <h3 className="mb-3 text-xl font-bold text-center sm:text-2xl md:text-3xl lg:text-left sm:mb-4 md:mb-6">Our Philosophy</h3>
            
            <p className="mb-6 text-sm text-center text-gray-600 sm:text-base lg:text-left md:mb-8">
              At Kalakar, we believe everyone has an artist within. Our mission is to provide a 
              nurturing environment where students of all ages and skill levels can discover and 
              develop their artistic abilities. Through structured learning and creative freedom, 
              we help students build confidence and express their unique vision.
            </p>
            
            <div className="grid gap-4 mt-2 sm:grid-cols-2 sm:gap-6 sm:mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full sm:w-12 sm:h-12 bg-primary-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold sm:text-lg">{feature.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">{feature.description}</p>
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
