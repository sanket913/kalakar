import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Teachers: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teachers = [
    {
      name: "Rajesh Mehta",
      role: "Painting Instructor",
      bio: "With over 15 years of experience, Rajesh specializes in oil painting and contemporary techniques. His work has been featured in galleries across India.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Anita Desai",
      role: "Drawing & Sketching Instructor",
      bio: "Anita is known for her detailed pencil and charcoal artworks. She has a Master's in Fine Arts and believes in building strong foundational skills.",
      image: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sanjay Kapoor",
      role: "Mixed Media Specialist",
      bio: "Sanjay brings innovation to the classroom with his experimental approach to art. His background spans traditional and digital art forms.",
      image: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
  ];

  return (
    <section id="teachers" className="py-16 bg-gray-50 md:py-24" ref={ref}>
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
          >
            Our Faculty
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-title"
          >
            Meet Our Expert Instructors
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto section-subtitle"
          >
            Our team of experienced artists are passionate about teaching and dedicated to helping 
            students develop their skills and unique artistic voice.
          </motion.p>
        </div>
        
        <div className="grid gap-8 mt-16 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={teacher.image}
                  alt={teacher.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex space-x-3">
                      <a 
                        href={teacher.social.instagram} 
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full hover:bg-white hover:text-primary-600"
                        aria-label={`${teacher.name}'s Instagram`}
                      >
                        <Instagram size={18} />
                      </a>
                      <a 
                        href={teacher.social.twitter} 
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full hover:bg-white hover:text-primary-600"
                        aria-label={`${teacher.name}'s Twitter`}
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href={teacher.social.linkedin} 
                        className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full hover:bg-white hover:text-primary-600"
                        aria-label={`${teacher.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{teacher.name}</h3>
                <p className="mb-4 text-sm text-primary-600">{teacher.role}</p>
                <p className="text-gray-600">{teacher.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-8 mt-16 text-center bg-primary-600 rounded-lg shadow-lg"
        >
          <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
            Interested in joining our team?
          </h3>
          <p className="mb-6 text-primary-100">
            We're always looking for talented artists who are passionate about teaching.
            If you'd like to become an instructor at Kalakar Art Academy, we'd love to hear from you.
          </p>
          <a href="#contact" className="text-primary-700 bg-white btn hover:bg-primary-50">
            Apply to Teach
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Teachers;