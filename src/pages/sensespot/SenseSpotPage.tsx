import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Monitor, CheckCircle2, Award, Layers, User } from 'lucide-react';
import PodInterface from './components/PodInterface';
import LocationFinder from './components/LocationFinder';

const SenseSpotPage = () => {
  const [activeTab, setActiveTab] = useState('interface');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <motion.h1 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                SenseSpot Pod
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Convenient self-service kiosks for guided cancer screenings. Our interactive pods make early detection accessible to everyone, everywhere.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#locations"
                  className="btn bg-white text-secondary-700 hover:bg-gray-100"
                >
                  Find Nearest Pod
                </a>
                <a
                  href="#interface"
                  className="btn bg-transparent border border-white text-white hover:bg-secondary-600"
                >
                  See How It Works
                </a>
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SenseSpot Pod kiosk"
                className="rounded-lg shadow-2xl max-h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Use SenseSpot Pods?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our self-service pods make cancer screening convenient, private, and accessible.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-secondary-600" />,
                title: 'Guided Interface',
                description: 'Interactive touchscreen that walks you through each step of the screening process.'
              },
              {
                icon: <Layers className="h-8 w-8 text-secondary-600" />,
                title: 'Multiple Test Types',
                description: 'From FIT kits to HPV swabs, skin and oral checks, all in one convenient location.'
              },
              {
                icon: <Calendar className="h-8 w-8 text-secondary-600" />,
                title: 'Instant Booking',
                description: 'If follow-up is needed, book subsidized appointments on the spot.'
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-secondary-600" />,
                title: 'Immediate Feedback',
                description: 'Get instant analysis results and clear next steps.'
              },
              {
                icon: <User className="h-8 w-8 text-secondary-600" />,
                title: 'Privacy First',
                description: 'Private booths with secure data handling and Singpass integration.'
              },
              {
                icon: <Award className="h-8 w-8 text-secondary-600" />,
                title: 'Earn OncoPoints',
                description: 'Accumulate rewards for each screening, redeemable for health benefits.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-full bg-secondary-50 p-3">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="interface" className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interactive Demo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the SenseSpot Pod interface and location finder.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('interface')}
                  className={`flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-center ${
                    activeTab === 'interface'
                      ? 'border-secondary-500 text-secondary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Monitor className="inline-block mr-2 h-5 w-5" />
                  Pod Interface
                </button>
                <button
                  onClick={() => setActiveTab('locations')}
                  className={`flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-center ${
                    activeTab === 'locations'
                      ? 'border-secondary-500 text-secondary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="inline-block mr-2 h-5 w-5" />
                  Find Locations
                </button>
              </nav>
            </div>
            <div className="p-6">
              {activeTab === 'interface' && <PodInterface />}
              {activeTab === 'locations' && <LocationFinder />}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              User Experiences
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear what people are saying about SenseSpot Pods.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                quote: "I used the SenseSpot Pod at my local mall. The process was so simple and quick. I received my results and booked a follow-up all in one visit.",
                name: "David W.",
                location: "Jurong East",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "As a busy professional, I appreciate how convenient the SenseSpot Pods are. I did my screening during my lunch break without needing an appointment.",
                name: "Priya S.",
                location: "Toa Payoh",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The privacy of the pod made me feel comfortable doing health screenings in a public place. The guidance was clear and I knew exactly what to do.",
                name: "Lim K.H.",
                location: "Tampines",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <blockquote className="flex-1">
                    <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        <MapPin className="inline-block mr-1 h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-800 py-16 sm:py-24 text-white" id="locations">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Find a SenseSpot Pod Near You
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Our pods are available in various locations including malls, community centers, and corporate offices.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setActiveTab('locations')}
                className="btn bg-white text-secondary-800 hover:bg-gray-100"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Find Locations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SenseSpotPage;