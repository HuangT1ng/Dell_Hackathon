import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Shield, 
  Clock, 
  Award, 
  Calendar, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Zap,
  Send,
  User,
  Bot
} from 'lucide-react';

const MobileAppPage = () => {
  const [webChatMessages, setWebChatMessages] = useState([
    {
      type: 'bot',
      message: 'Hello! I\'m OncoBot, your health companion. How are you feeling today?',
      time: '10:00 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setWebChatMessages(prev => [...prev, {
      type: 'user',
      message: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    // Simulate bot response
    setTimeout(() => {
      setWebChatMessages(prev => [...prev, {
        type: 'bot',
        message: 'Thank you for sharing. Based on your response, I recommend scheduling a routine check-up. Would you like me to help you book one?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);

    setInputMessage('');
  };

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
                  Available 24/7 on WhatsApp
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-blue-800 mb-6">
                Your Personal Health Companion
              </h1>
              <p className="text-lg leading-8 text-blue-700 mb-8">
                OncoBot is your AI-powered health companion, available 24/7 through WhatsApp. Get personalized health advice, regular check-ins, and easy access to subsidized cancer screenings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/start"
                  className="btn bg-blue-500 text-white hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Chatting Now
                </Link>
                <Link
                  to="/learn-more"
                  className="btn bg-white text-blue-500 hover:bg-blue-50 border-2 border-blue-500 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Learn More
                </Link>
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
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="OncoBot WhatsApp Interface"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Experience OncoBot</h2>
            <p className="text-lg text-blue-700">Your AI-powered health companion, available 24/7</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WhatsApp Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">OncoBot</h3>
                    <p className="text-sm text-white/90 flex items-center gap-2">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                      </span>
                      Online • 24/7 Available
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 h-[600px] overflow-y-auto">
                <div className="space-y-4">
                  {/* WhatsApp Messages */}
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center ring-2 ring-green-100">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm max-w-[80%] border border-gray-100">
                      <p className="text-gray-800">Hi! 👋 I'm OncoBot, your health companion. How are you feeling today?</p>
                      <span className="text-xs text-gray-500 mt-2 block">10:00 AM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-green-50 p-4 rounded-2xl shadow-sm max-w-[80%] border border-green-100">
                      <p className="text-gray-800">I've been feeling a bit tired lately and noticed some changes in my weight.</p>
                      <span className="text-xs text-gray-500 mt-2 block">10:01 AM</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center ring-2 ring-blue-100">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center ring-2 ring-green-100">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm max-w-[80%] border border-gray-100">
                      <p className="text-gray-800">I understand. Let's track these symptoms. Have you noticed any other changes in your health recently?</p>
                      <span className="text-xs text-gray-500 mt-2 block">10:02 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">OncoBot Web Chat</h3>
                    <p className="text-sm text-white/90">AI Health Assistant</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 h-[600px] flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {webChatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-2 ${msg.type === 'user' ? 'justify-end' : ''}`}
                    >
                      {msg.type === 'bot' && (
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-blue-100">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div className={`p-4 rounded-2xl shadow-sm max-w-[80%] ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                          : 'bg-white border border-blue-100'
                      }`}>
                        <p>{msg.message}</p>
                        <span className={`text-xs mt-2 block ${
                          msg.type === 'user' ? 'text-white/80' : 'text-blue-600'
                        }`}>
                          {msg.time}
                        </span>
                      </div>
                      {msg.type === 'user' && (
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-blue-100">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2 bg-white p-2 rounded-xl border border-blue-100">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* Personal Dashboard Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Health Dashboard</h2>
            <p className="text-lg text-blue-700">Track your health journey and manage your screenings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold ring-2 ring-white/30">
                    MH
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Mrs Han</h3>
                    <p className="text-white/80">Member since 2024</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                    <span className="text-white/80">Health Status</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">Good</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                    <span className="text-white/80">Last Check-up</span>
                    <span>2 months ago</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                    <span className="text-white/80">Next Screening</span>
                    <span>Due in 4 months</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Available Screenings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                  <h3 className="font-semibold text-lg">Available Screenings</h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      title: 'Breast Cancer Screening',
                      description: 'Mammogram screening recommended for women aged 40 and above',
                      date: 'Available next week',
                      points: 500
                    },
                    {
                      title: 'Colorectal Cancer Screening',
                      description: 'FIT test for early detection of colorectal cancer',
                      date: 'Available tomorrow',
                      points: 300
                    }
                  ].map((screening, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100">
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-800 mb-1">{screening.title}</h4>
                        <p className="text-blue-700 text-sm mb-2">{screening.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-blue-600 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {screening.date}
                          </span>
                          <span className="text-green-600 flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            +{screening.points} OncoPoints
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* OncoPoints Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                  <h3 className="font-semibold text-lg">Your OncoPoints</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6 bg-blue-50 p-4 rounded-xl">
                    <div>
                      <p className="text-3xl font-bold text-blue-800">2,500</p>
                      <p className="text-blue-700">Total Points Earned</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">1,200</p>
                      <p className="text-green-600">Available Points</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Recent Activity',
                        points: '+300',
                        description: 'Completed health check-in',
                        icon: <Clock className="w-5 h-5 text-blue-500" />
                      },
                      {
                        title: 'Next Milestone',
                        points: '2,000',
                        description: 'Redeem for gym membership',
                        icon: <Award className="w-5 h-5 text-blue-500" />
                      },
                      {
                        title: 'Points Expiring',
                        points: '200',
                        description: 'In 30 days',
                        icon: <Calendar className="w-5 h-5 text-blue-500" />
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          {item.icon}
                          <h4 className="font-semibold text-blue-800">{item.title}</h4>
                        </div>
                        <p className="text-2xl font-bold text-blue-600 mb-1">{item.points}</p>
                        <p className="text-blue-700 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage; 