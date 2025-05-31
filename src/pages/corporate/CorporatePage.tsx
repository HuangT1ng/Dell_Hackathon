import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Medal, Trophy, BarChart3, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import CorporateDashboard from './components/CorporateDashboard';
import LeaderboardDemo from './components/LeaderboardDemo';
import OncoPointsTracker from './components/OncoPointsTracker';

const CorporatePage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-500 to-accent-700 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <motion.h1 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Corporate Wellness Solutions
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Empower your workforce with OncoSense's comprehensive cancer screening and prevention program. Boost employee wellness, reduce healthcare costs, and create a culture of health.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="btn bg-white text-accent-700 hover:bg-gray-100">
                  Request Demo
                </button>
                <a href="#features" className="btn bg-transparent border border-white text-white hover:bg-accent-600">
                  See Features
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Corporate wellness team"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Corporate Wellness Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A comprehensive solution to elevate your corporate health initiatives.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-accent-600" />,
                title: 'Health Analytics',
                description: 'Track company-wide wellness metrics, screening participation rates, and anonymized risk assessments.'
              },
              {
                icon: <Medal className="h-8 w-8 text-accent-600" />,
                title: 'Gamified Wellness',
                description: 'Drive engagement with team competitions, leaderboards, and achievements for health goals.'
              },
              {
                icon: <Trophy className="h-8 w-8 text-accent-600" />,
                title: 'OncoPoints System',
                description: 'Reward employees for health screenings and preventive actions with redeemable points.'
              },
              {
                icon: <Calendar className="h-8 w-8 text-accent-600" />,
                title: 'On-site Screening Days',
                description: 'Schedule SenseSpot pods at your location for convenient employee screenings.'
              },
              {
                icon: <Building2 className="h-8 w-8 text-accent-600" />,
                title: 'Executive Reporting',
                description: 'Comprehensive wellness reports and ROI analysis for your health investment.'
              },
              {
                icon: <Users className="h-8 w-8 text-accent-600" />,
                title: 'Wellness Campaigns',
                description: 'Custom health awareness campaigns and educational resources for your workforce.'
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
                <div className="rounded-full bg-accent-50 p-3">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interactive Dashboard Demo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the powerful analytics and engagement tools available for corporate administrators.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {[
                  { id: 'dashboard', label: 'Health Metrics', icon: <BarChart3 className="h-5 w-5 mr-2" /> },
                  { id: 'leaderboard', label: 'Leaderboard', icon: <Medal className="h-5 w-5 mr-2" /> },
                  { id: 'oncopoints', label: 'OncoPoints', icon: <Trophy className="h-5 w-5 mr-2" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-accent-500 text-accent-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              {activeTab === 'dashboard' && <CorporateDashboard />}
              {activeTab === 'leaderboard' && <LeaderboardDemo />}
              {activeTab === 'oncopoints' && <OncoPointsTracker />}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Companies Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from organizations that have implemented OncoSense corporate wellness solutions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Since implementing OncoSense, our employees have become more proactive about their health. The gamification aspect has really boosted participation in screenings.",
                name: "Jason Tan",
                role: "HR Director, TechVision Pte Ltd",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The ROI on our wellness program has been tremendous. We've seen reduced absenteeism and increased productivity since focusing on preventive health screenings.",
                name: "Michelle Lee",
                role: "COO, GlobalTrade Singapore",
                image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "The OncoPoints system has transformed our company culture. Employees are excited about earning rewards while taking care of their health. The on-site pods made screenings convenient.",
                name: "Rajesh Kumar",
                role: "Wellness Manager, Finance Solutions Ltd",
                image: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-800 py-16 sm:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Corporate Wellness Program?
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Join leading companies that have implemented OncoSense's corporate wellness solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn bg-white text-accent-700 hover:bg-gray-100">
                Schedule a Consultation
              </button>
              <button className="btn bg-transparent border border-white text-white hover:bg-accent-700">
                Download Information Pack
              </button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 opacity-70">
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">TechVision</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">GlobalTrade</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">SingFinance</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">EastLogistics</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">MediaGroup</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-12 bg-white rounded-md px-4 flex items-center">
                <span className="text-lg font-bold text-gray-700">PacificRetail</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;