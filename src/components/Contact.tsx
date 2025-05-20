import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState, FormEvent, useRef } from 'react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Add form reference
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      course: formData.get('course'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Read response text
      const text = await response.text();

      // Try to parse JSON if text is not empty
      let jsonData;
      if (text) {
        try {
          jsonData = JSON.parse(text);
        } catch (parseError) {
          jsonData = {};
        }
      } else {
        jsonData = {};
      }

      if (!response.ok) {
        throw new Error(jsonData.message || 'Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Use the formRef to reset the form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit form',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-16 bg-white md:py-24" ref={ref}>
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800"
          >
            Contact Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-title"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto section-subtitle"
          >
            Have questions about our courses or want to enroll? Reach out to us and our team will 
            be happy to assist you.
          </motion.p>
        </div>
        
        <div className="grid gap-8 mt-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>
              
              {/* Add ref={formRef} to the form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block mb-1 text-sm font-medium text-gray-700">
                    Interested In
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="beginner">Beginner-Art Foundations</option>
                    <option value="intermediate">Intermediate-Skill Building..</option>
                    <option value="advanced">Advanced-Artistic Mastery..</option>
                    
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="w-full btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-100">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 8866742028</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-100">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600">kalakarartacademy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-100">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-600">
                      Duplex Shop no.47,<br />
                      Near Entry Gate of Samanvay Samipya Complex<br/>
                      Harni-Sama Link Road<br/>
                      Vadodara, Gujarat 390022<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-100">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Academy Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <p className="mb-4 text-gray-600">
                Stay updated with our latest events, workshops, and student showcases by following us on social media.
              </p>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fyt.openinapp.co%2F3le2v%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafQI0oYTbnXHZPm-EVuzVSRS5FKm0yuQi7IfXydSgjlVrmBJ0OV5os_zq2Jkw_aem_aRPRKEcy45lBbgDFCaoEng&e=AT3GjR24RtOxy1BlsapWpsQb35OYJ2FIRLHO-klTylxJMM6uvoy44g0EKEBg9s8X5HEBEcEiuTxvgTAeMWQdZNYRvHkLSTzeOfDIz5Sh2cYtvBAAyj9a0RI"
                  className="flex items-center justify-center w-10 h-10 text-white rounded-full"
                  style={{ backgroundColor: '#E1306C' }}
                  aria-label="Instagram"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5Zm7.5 1a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm4.75-.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                </a>
            
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100016615772617"
                  className="flex items-center justify-center w-10 h-10 text-white rounded-full"
                  style={{ backgroundColor: '#1877F2' }}
                  aria-label="Facebook"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.598 0 0 .597 0 1.333v21.334C0 23.403.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.097 2.793.14v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.762v2.311h3.591l-.467 3.622h-3.124V24h6.126c.728 0 1.324-.597 1.324-1.333V1.333C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
            
                {/* WhatsApp */}
                <a
                  href="https://chat.whatsapp.com/LE6XpGUu02cH2gUnhj4oIh"
                  className="flex items-center justify-center w-10 h-10 text-white rounded-full"
                  style={{ backgroundColor: '#25D366' }}
                  aria-label="WhatsApp"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16.001 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.82.894 5.442 2.409 7.6L2.667 29.333 8.933 27c2.118 1.33 4.609 2.001 7.068 2.001 7.364 0 13.333-5.97 13.333-13.334S23.365 2.667 16.001 2.667zm0 24c-2.058 0-4.036-.605-5.726-1.749l-.41-.267-3.505 1.167 1.137-3.688-.267-.423a10.637 10.637 0 01-1.599-5.733c0-5.883 4.785-10.667 10.667-10.667s10.667 4.784 10.667 10.667-4.785 10.667-10.667 10.667zm5.31-7.808c-.291-.146-1.72-.846-1.986-.942-.266-.097-.46-.146-.654.147-.193.292-.75.942-.92 1.134-.17.193-.34.22-.63.073-.292-.146-1.23-.453-2.343-1.446-.867-.773-1.454-1.73-1.624-2.021-.17-.292-.018-.45.128-.596.132-.132.292-.34.438-.51.146-.171.193-.292.292-.487.097-.195.049-.365-.024-.511-.073-.146-.654-1.575-.897-2.151-.237-.57-.478-.493-.654-.503l-.555-.01c-.194 0-.511.073-.779.365s-1.024 1-1.024 2.438c0 1.438 1.046 2.826 1.192 3.02.146.193 2.055 3.144 4.975 4.408.695.3 1.237.478 1.66.612.698.222 1.333.191 1.837.116.56-.084 1.72-.704 1.963-1.385.242-.68.242-1.262.17-1.385-.073-.122-.267-.195-.56-.34z" />
                  </svg>
                </a>
            
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@Mr.Kalakaar_india"
                  className="flex items-center justify-center w-10 h-10 text-white rounded-full"
                  style={{ backgroundColor: '#FF0000' }}
                  aria-label="YouTube"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
