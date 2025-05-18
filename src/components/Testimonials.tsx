import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Kalakar Art Academy transformed my relationship with art. As an absolute beginner, I was nervous about starting, but the instructors were incredibly supportive and helped me discover talents I didn't know I had.",
      name: "Priya Sharma",
      title: "Beginner Course Student",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The classes at Kalakar pushed me beyond my comfort zone and helped me develop my unique style. The small class size ensures everyone gets personalized attention and feedback. Highly recommended!",
      name: "Vikram Patel",
      title: "Intermediate Painting Student",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a busy professional, I appreciate the flexible schedule options. The weekend workshops are perfect for my lifestyle, and I've seen tremendous improvement in my sketching skills in just a few months.",
      name: "Meera Kapoor",
      title: "Weekend Workshop Participant",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-primary-50 md:py-24" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute text-primary-100 opacity-50">
          <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
          >
            Testimonials
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-title"
          >
            What Our Students Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto section-subtitle"
          >
            Hear from our community of artists about their experiences at Kalakar Art Academy.
          </motion.p>
        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="relative p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="absolute -top-4 -left-4">
                <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-500">
                  <Quote size={18} />
                </div>
              </div>
              
              <p className="mt-4 italic text-gray-600">{testimonial.quote}</p>
              
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-8 mt-16 text-center bg-white rounded-lg shadow-lg"
        >
          <h3 className="mb-4 text-xl font-semibold md:text-2xl">Ready to start your artistic journey?</h3>
          <p className="mb-6 text-gray-600">
            Join our supportive community of artists and unlock your creative potential today.
          </p>
          <a href="#contact" className="btn btn-primary">
            Enroll Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;