import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Medal, Trophy, BarChart3, Calendar, CheckCircle2, ChevronRight, Award, BookOpen, Bot, Gift, Group, Handshake, PieChart } from 'lucide-react';
import CorporateDashboard from './components/CorporateDashboard';
import LeaderboardDemo from './components/LeaderboardDemo';
import OncoPointsTracker from './components/OncoPointsTracker';

const corporatePlanRows = [
  {
    icon: <Building2 className="w-10 h-10 text-blue-500" />, 
    tagline: 'Instant Results',
    title: 'On-Site SenseSpot Pods',
    desc: 'Deploy self-administered cancer screening pods (FIT, HPV, skin/oral) at your workplace for easy, private access.',
    accent: 'bg-blue-100 text-blue-500',
    dot: 'bg-blue-400'
  },
  {
    icon: <BookOpen className="w-10 h-10 text-green-500" />, 
    tagline: 'Engage & Educate',
    title: 'Wellness Education',
    desc: 'Talks, webinars, and a resource library to keep your team informed and engaged in proactive health.',
    accent: 'bg-green-100 text-green-500',
    dot: 'bg-green-400'
  },
  {
    icon: <Handshake className="w-10 h-10 text-orange-500" />, 
    tagline: 'CSR & Tax Benefits',
    title: 'CSR, Tax & Employee Benefits',
    desc: 'Government incentives and CSR recognition for supporting employee health and public well-being. Plus: Employee rewards, OncoPoints, and wellness perks!',
    accent: 'bg-orange-100 text-orange-500',
    dot: 'bg-orange-400',
    badge: <span className="mt-3 inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs">Includes Employee Rewards & Wellness Perks</span>
  }
];

const CorporatePage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-blue-900">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Empower Your Workforce with Preventive Health</h1>
            <p className="text-lg mb-6">Bring mobile health screening, AI-powered risk assessment, and OncoPoints rewards to your company. Invest in your team's well-being and productivity.</p>
            <div className="flex gap-4 mb-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Book a Corporate Event</button>
              <button className="bg-white text-blue-700 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Contact Us</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Corporate Health Event" className="rounded-2xl shadow-xl w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Corporate Plan Section (redesigned) */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-200 text-blue-800 font-semibold mb-3">All-in-One Corporate Wellness Platform</span>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent">What's Included in OncoSense Corporate Solutions?</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">Empower your workforce with a seamless blend of on-site screening, education, analytics, rewards, and government-backed incentives—all in one platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {corporatePlanRows.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
                className="relative bg-white rounded-2xl shadow-lg flex flex-col items-center text-center px-6 py-8 transition-all duration-300 h-full border border-blue-100"
              >
                <div className={`mb-4 w-14 h-14 flex items-center justify-center rounded-full ${item.accent}`}>{item.icon}</div>
                <div className={`w-2 h-2 rounded-full ${item.dot} mb-2`}></div>
                <span className="text-xs font-bold uppercase mb-1 tracking-wide text-blue-500">{item.tagline}</span>
                <h3 className="text-lg font-extrabold text-blue-800 mb-2 leading-tight tracking-tight">{item.title}</h3>
                <p className="text-blue-700 text-sm font-medium leading-relaxed">{item.desc}</p>
                {item.badge}
              </motion.div>
            ))}
          </div>
          {/* Checklist */}
          <div className="mt-12 flex flex-col items-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">At a Glance</h4>
            <ul className="flex flex-wrap gap-4 justify-center">
              <li className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium"><CheckCircle2 className="w-5 h-5 text-green-500" /> On-site Pods</li>
              <li className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium"><CheckCircle2 className="w-5 h-5 text-green-500" /> Wellness Education</li>
              <li className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium"><CheckCircle2 className="w-5 h-5 text-green-500" /> CSR, Tax & Employee Benefits</li>
            </ul>
          </div>
          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center gap-2 hover:scale-105 transition">
              <ChevronRight className="w-6 h-6" /> Get Started with OncoSense
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section (only Corporate Dashboard) */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Corporate Dashboard Demo
            </h2>
            <p className="mt-4 text-lg text-blue-700">
              Experience the powerful analytics and engagement tools available for corporate administrators.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100">
              <CorporateDashboard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;