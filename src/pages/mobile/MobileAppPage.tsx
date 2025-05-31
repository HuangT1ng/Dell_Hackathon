import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Calendar, 
  Camera, 
  Mic, 
  Activity, 
  Award, 
  ChevronRight,
  Heart,
  Users,
  AlertTriangle
} from 'lucide-react';
import SymptomChecker from './components/SymptomChecker';
import PhotoAnalysis from './components/PhotoAnalysis';
import RiskScoreDashboard from './components/RiskScoreDashboard';

const MobileAppPage = () => {
  const [activeTab, setActiveTab] = useState('symptomChecker');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <motion.h1 
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                OncoSense Mobile App
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Early cancer detection in your pocket. Our AI-powered mobile app helps you monitor symptoms, analyze potential warning signs, and book screenings with ease.
              </motion.p>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#features"
                  className="btn bg-white text-primary-700 hover:bg-gray-100"
                >
                  Explore Features
                </a>
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  <img
                    src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-[272px] h-[572px] object-cover"
                    alt="OncoSense Mobile App"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              OncoSense mobile app provides comprehensive tools for early cancer detection and prevention.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <CheckCircle2 className="h-8 w-8 text-primary-600" />,
                title: 'Symptom Checker',
                description: 'Personalized symptom analysis based on your age, gender, lifestyle, and medical history.'
              },
              {
                icon: <Camera className="h-8 w-8 text-primary-600" />,
                title: 'Photo & Voice Analysis',
                description: 'AI-powered analysis of skin, oral lesions, and voice patterns for potential cancer indicators.'
              },
              {
                icon: <Calendar className="h-8 w-8 text-primary-600" />,
                title: 'Booking Interface',
                description: 'Seamless appointment booking for subsidized screenings with Singpass integration.'
              },
              {
                icon: <Activity className="h-8 w-8 text-primary-600" />,
                title: 'Risk Score Dashboard',
                description: 'Real-time cancer risk assessment with personalized action plans.'
              },
              {
                icon: <Award className="h-8 w-8 text-primary-600" />,
                title: 'OncoPoints',
                description: 'Earn rewards for regular screenings and healthy behaviors.'
              },
              {
                icon: <Users className="h-8 w-8 text-primary-600" />,
                title: 'Support Community',
                description: 'Connect with others on their cancer prevention journey.'
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
                <div className="rounded-full bg-primary-50 p-3">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Interactive Demo
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the key features of the OncoSense mobile app.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {[
                  { id: 'symptomChecker', label: 'Symptom Checker', icon: <CheckCircle2 className="mr-2 h-5 w-5" /> },
                  { id: 'photoAnalysis', label: 'Photo Analysis', icon: <Camera className="mr-2 h-5 w-5" /> },
                  { id: 'riskDashboard', label: 'Risk Dashboard', icon: <Activity className="mr-2 h-5 w-5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-6 text-center border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
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
              {activeTab === 'symptomChecker' && <SymptomChecker />}
              {activeTab === 'photoAnalysis' && <PhotoAnalysis />}
              {activeTab === 'riskDashboard' && <RiskScoreDashboard />}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              User Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from people whose lives have been impacted by early detection.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "The OncoSense app flagged unusual symptoms I was experiencing. I followed up with my doctor and we caught my skin cancer at stage 1. I'm incredibly grateful.",
                name: "Sarah L.",
                role: "Melanoma Survivor",
                image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "As someone with a family history of cancer, I've always been anxious about screenings. The OncoSense app makes the process less intimidating and more accessible.",
                name: "Michael T.",
                role: "Regular User",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                quote: "I'm in my 60s and technology isn't my strong suit, but the OncoSense app is surprisingly easy to use. The risk assessment gave me peace of mind.",
                name: "Linda K.",
                role: "Senior User",
                image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      <section className="bg-primary-800 py-16 sm:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Download the OncoSense App Today
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Take the first step toward proactive cancer prevention.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="btn bg-white text-primary-700 hover:bg-gray-100">
                Download on App Store
              </button>
              <button className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;