import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Smartphone, Layers, Building2, Brain, Calendar, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-blue-900">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-blue-900">
                Revolutionizing Early Cancer Detection
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-800">
                OncoSense is creating a future where everyone has easy, immediate access to cancer screening, health education, and personalized care — all through AI-driven technology and community collaboration.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/mobile"
                  className="btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Try Symptom Checker
                </Link>
                <Link
                  to="/sensespot"
                  className="btn bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Find SenseSpot Pod
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
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern healthcare technology"
                className="w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Innovative Healthcare Solutions
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl mb-4">
              Our Comprehensive Solution
            </h2>
            <p className="text-lg text-blue-700">
              A complete ecosystem for early cancer detection and prevention
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title: 'AI-Powered Health Companion',
                description: 'Experience the future of healthcare with our intelligent system that combines personalized symptom checking, real-time risk tracking, and seamless Singpass integration for instant subsidized screening bookings.',
                link: '/mobile',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Layers className="h-12 w-12 text-blue-600" />,
                title: 'SenseSpot Screening Pods',
                description: 'Discover our innovative self-contained screening pods in your neighborhood. Get instant AI-driven analysis of skin, oral, and throat scans, plus convenient self-testing kits with immediate results.',
                link: '/sensespot',
                image: 'https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Building2 className="h-12 w-12 text-blue-600" />,
                title: 'Corporate Wellness Revolution',
                description: 'Transform your workplace into a health-conscious environment with expert-led educational talks, on-site screening days, and exciting incentives including CDC Vouchers and FairPrice discounts.',
                link: '/corporate',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: 'OncoPoints Rewards',
                description: 'Join our gamified wellness journey! Earn points for screenings, refer friends, and redeem rewards for wellness products, gym memberships, or contribute to community screening initiatives.',
                link: '/rewards',
                image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Decorative elements */}
                <div className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-50 animate-pulse`}></div>
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-30 animate-pulse animation-delay-1000`}></div>

                <div className="flex-1 relative z-10">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-md border border-blue-100">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{feature.title}</h3>
                    </div>
                    <p className="text-blue-700 leading-relaxed mb-6">{feature.description}</p>
                    <Link
                      to={feature.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-3 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/50 to-transparent">
                        <div className="text-white font-medium">Discover More →</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;