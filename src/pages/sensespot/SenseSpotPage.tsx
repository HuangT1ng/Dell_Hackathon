import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Award, 
  Users, 
  Stethoscope, 
  Microscope,
  Activity,
  Heart,
  ArrowRight,
  CheckCircle2,
  Navigation
} from 'lucide-react';

const SenseSpotPage = () => {
  const upcomingLocations = [
    {
      location: 'Tampines Hub',
      date: 'March 15-16, 2024',
      time: '10:00 AM - 6:00 PM',
      address: '1 Tampines Walk, Singapore 528523',
      services: ['Blood Work', 'X-Ray', 'Health Consultation'],
      points: 500,
      coordinates: { lat: 1.3521, lng: 103.9442 },
      queue: 12,
      learning: 5
    },
    {
      location: 'Jurong East Sports Hall',
      date: 'March 29-30, 2024',
      time: '10:00 AM - 6:00 PM',
      address: '21 Jurong East Street 31, Singapore 609517',
      services: ['Blood Work', 'X-Ray', 'Health Consultation'],
      points: 500,
      coordinates: { lat: 1.3333, lng: 103.7422 },
      queue: 8,
      learning: 3
    },
    {
      location: 'Toa Payoh Hub',
      date: 'April 12-13, 2024',
      time: '10:00 AM - 6:00 PM',
      address: '93 Toa Payoh Central, Singapore 319194',
      services: ['Blood Work', 'X-Ray', 'Health Consultation'],
      points: 500,
      coordinates: { lat: 1.3327, lng: 103.8476 },
      queue: 15,
      learning: 7
    },
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Health Consultation',
      description: 'One-on-one consultations with experienced doctors',
      points: 200,
      color: 'bg-blue-100 border-blue-300'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Blood Work',
      description: 'Comprehensive blood tests for early detection',
      points: 300,
      color: 'bg-green-100 border-green-300'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'X-Ray Screening',
      description: 'Quick and painless X-ray examinations',
      points: 400,
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Education',
      description: 'Interactive sessions on preventive healthcare',
      points: 100,
      color: 'bg-pink-100 border-pink-300'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-blue-800">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                  </span>
                  Mobile Screening Booths
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-blue-800 mb-6">
                Bringing Healthcare to Your Neighborhood
              </h1>
              <p className="text-lg leading-8 text-blue-700 mb-8">
                Experience our mobile screening booths that travel across Singapore every two weeks. Get comprehensive health check-ups, consultations with doctors, and earn OncoPoints while learning about preventive healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Find Nearest Location
                </button>
                <button className="btn bg-white text-blue-500 hover:bg-blue-50 border-2 border-blue-500 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25"></div>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Mobile Health Screening Event"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map + Locations Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Map (smaller) */}
            <div className="w-full lg:w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-xl border border-blue-100 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255281.1903627155!2d103.704165!3d1.313996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1709876543210!5m2!1sen!2ssg&markers=color:red%7C1.3521,103.9442%7C1.3333,103.7422%7C1.3327,103.8476%7C1.4360,103.7860%7C1.3247,103.9362"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Locations List */}
            <div className="w-full lg:w-1/2 min-h-[350px] rounded-2xl shadow-xl border border-blue-100 bg-white flex flex-col justify-between p-4">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Upcoming Locations & Queues</h3>
              <div className="flex flex-col gap-4 flex-1">
                {upcomingLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-blue-50 p-4 rounded-lg shadow border border-blue-100 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Navigation className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-blue-800">{location.location}</span>
                      </div>
                      <p className="text-sm text-blue-700 mb-1">{location.address}</p>
                      <div className="flex items-center text-sm text-blue-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{location.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"><Clock className="w-4 h-4 mr-1" /> Queue: {location.queue}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium"><Award className="w-4 h-4 mr-1" /> Learning: {location.learning}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (highlighted) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
            <p className="text-lg text-blue-700">Comprehensive health screenings and consultations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 border-2 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center ${service.color}`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 border-blue-200 mb-4 shadow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-blue-700 mb-4">{service.description}</p>
                <div className="flex items-center justify-center text-green-600 font-bold">
                  <Award className="w-5 h-5 mr-2" />
                  +{service.points} OncoPoints
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SenseSpotPage;