
import { motion } from 'framer-motion';
import { Award, Star, MessageSquare } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Cardiologist',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Neurosurgeon',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
      rating: 4.8
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialization: 'Pediatrician',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?auto=format&fit=crop&w=800&q=80',
      rating: 4.9
    },
    {
      name: 'Dr. Robert Kim',
      specialization: 'Orthopedic Surgeon',
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      rating: 4.7
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Board-certified specialists dedicated to providing exceptional care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                  </div>
                  <Award className="text-blue-500" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>Experience: {doctor.experience}</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                  <button className="p-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                    <MessageSquare size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;