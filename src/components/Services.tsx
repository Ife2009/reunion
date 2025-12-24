// components/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Bone, Eye, Baby, Thermometer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: 'Cardiology',
      description: 'Advanced heart care with cutting-edge diagnostic tools.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Brain className="text-purple-500" size={32} />,
      title: 'Neurology',
      description: 'Comprehensive neurological care and treatment.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Bone className="text-orange-500" size={32} />,
      title: 'Orthopedics',
      description: 'Joint and bone care with modern surgical techniques.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Eye className="text-blue-500" size={32} />,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision correction services.',
      image: 'https://images.unsplash.com/photo-1543453923-b3347d090f8e?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Baby className="text-pink-500" size={32} />,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Thermometer className="text-green-500" size={32} />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response teams.',
      image: 'https://images.unsplash.com/photo-1516549655669-dfbf10d0c9b7?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical services delivered with expertise and compassion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;