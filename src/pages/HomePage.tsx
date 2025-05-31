import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Smartphone, Layers, Building2, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Early Cancer Detection, Powered by AI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                OncoSense combines cutting-edge AI technology with accessible screening tools to detect cancer early, when it's most treatable. Take control of your health journey today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/mobile"
                  className="btn bg-white text-primary-700 hover:bg-gray-100"
                >
                  Try Mobile App
                </Link>
                <Link
                  to="/sensespot"
                  className="btn bg-primary-500 text-white hover:bg-primary-400 border border-primary-400"
                >
                  Find SenseSpot Locations
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/8460127/pexels-photo-8460127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mobile app for cancer screening"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Cancer Screening Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our integrated platform provides multiple touchpoints for cancer screening and early detection.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Smartphone className="h-10 w-10 text-primary-600" />,
                title: 'Mobile App',
                description: 'Personalized symptom checker and risk assessment in your pocket',
                link: '/mobile'
              },
              {
                icon: <Layers className="h-10 w-10 text-primary-600" />,
                title: 'SenseSpot Pod',
                description: 'Interactive kiosks for guided self-testing and immediate analysis',
                link: '/sensespot'
              },
              {
                icon: <Building2 className="h-10 w-10 text-primary-600" />,
                title: 'Corporate Solutions',
                description: 'Empower employee wellness with integrated screening programs',
                link: '/corporate'
              },
              {
                icon: <Brain className="h-10 w-10 text-primary-600" />,
                title: 'AI Technology',
                description: 'Privacy-focused federated learning for continuous improvement',
                link: '/ai'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card flex flex-col items-center text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose OncoSense?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform offers unique advantages for early cancer detection.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Early Detection',
                description: 'Identify cancer risks at the earliest possible stage, when treatment is most effective.'
              },
              {
                title: 'Personalized Screening',
                description: 'Tailored recommendations based on your unique health profile and risk factors.'
              },
              {
                title: 'Accessibility',
                description: 'Multiple touchpoints for screening, from mobile app to convenient SenseSpot pods.'
              },
              {
                title: 'Data Privacy',
                description: 'Federated learning keeps your sensitive health data secure and private.'
              },
              {
                title: 'Continuous Improvement',
                description: 'AI models that get better over time while maintaining privacy standards.'
              },
              {
                title: 'Integrated Booking',
                description: 'Seamless appointment scheduling with Singpass for subsidized screenings.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="card flex flex-col bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-700 py-16 sm:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start Your Cancer Prevention Journey Today
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Early detection saves lives. Download the OncoSense app or visit a SenseSpot pod near you.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/mobile"
                className="btn bg-white text-secondary-800 hover:bg-gray-100"
              >
                Download App
              </Link>
              <Link
                to="/sensespot"
                className="btn bg-transparent text-white border border-white hover:bg-secondary-600"
              >
                Find SenseSpot Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;