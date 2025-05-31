import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Lock, 
  LineChart, 
  Users, 
  Shield, 
  Lightbulb, 
  CheckCircle2, 
  Server, 
  BarChart4,
  Smartphone
} from 'lucide-react';

const AILearningPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div 
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our AI Technology
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                OncoSense's AI technology drives our cancer detection capabilities while preserving privacy and ensuring accuracy. Learn how our federated learning approach keeps your data secure.
              </p>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-secondary-400 to-accent-400 opacity-75 blur"></div>
                <div className="relative rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                  <Brain className="h-16 w-16 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white">OncoSense AI</h3>
                  <p className="mt-2 text-white/80">Detecting cancer patterns with advanced neural networks</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary-300" />
                      <span className="text-sm text-white/90">99.2% Accuracy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary-300" />
                      <span className="text-sm text-white/90">Fast Detection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary-300" />
                      <span className="text-sm text-white/90">Privacy First</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary-300" />
                      <span className="text-sm text-white/90">Continuous Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Federated Learning Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Federated Learning Technology
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                How we keep your data private while improving our cancer detection models
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="card border-l-4 border-l-primary-600">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Server className="h-6 w-6 text-primary-600 mr-2" />
                    Local Training
                  </h3>
                  <p className="mt-2 text-gray-600">
                    AI models train on your device or at SenseSpot kiosks, keeping your sensitive health data local and secure.
                  </p>
                </div>
                
                <div className="card border-l-4 border-l-primary-600">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Shield className="h-6 w-6 text-primary-600 mr-2" />
                    Encrypted Updates
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Only anonymous model improvements are shared with our secure servers, never your personal health information.
                  </p>
                </div>
                
                <div className="card border-l-4 border-l-primary-600">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <BarChart4 className="h-6 w-6 text-primary-600 mr-2" />
                    Global Aggregation
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We combine insights from thousands of devices to improve detection accuracy without exposing individual data.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2 flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-md">
                <div className="rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 p-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-75 blur-md"></div>
                      <div className="relative rounded-full bg-white p-4">
                        <Lock className="h-12 w-12 text-primary-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <div className="text-center">
                      <div className="rounded-full bg-white p-3 shadow-md">
                        <Smartphone className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="mt-2 text-xs font-medium text-gray-700">User Device</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="rounded-full bg-white p-3 shadow-md">
                        <Server className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="mt-2 text-xs font-medium text-gray-700">Secure Server</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="rounded-full bg-white p-3 shadow-md">
                        <Brain className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="mt-2 text-xs font-medium text-gray-700">AI Model</div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-primary-600" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-gray-700">
                      <span>Model Training</span>
                      <span>85% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Performance Metrics */}
      <section className="bg-gray-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Performance Metrics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI models continue to improve through federated learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Breast Cancer Detection',
                accuracy: '94.8%',
                improvement: '+2.3%',
                samples: '125,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              },
              {
                title: 'Skin Cancer Screening',
                accuracy: '92.1%',
                improvement: '+3.5%',
                samples: '98,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              },
              {
                title: 'Colorectal Risk Assessment',
                accuracy: '91.5%',
                improvement: '+4.2%',
                samples: '78,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              },
              {
                title: 'Lung Cancer Prediction',
                accuracy: '89.7%',
                improvement: '+5.1%',
                samples: '62,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              },
              {
                title: 'Thyroid Nodule Analysis',
                accuracy: '93.3%',
                improvement: '+1.8%',
                samples: '45,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              },
              {
                title: 'Cervical Cancer Screening',
                accuracy: '90.9%',
                improvement: '+3.7%',
                samples: '52,000+',
                icon: <LineChart className="h-8 w-8 text-primary-600" />
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="card flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{metric.title}</h3>
                  {metric.icon}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-primary-700">{metric.accuracy}</p>
                    <p className="text-sm text-gray-600">Current Accuracy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-secondary-600">{metric.improvement}</p>
                    <p className="text-sm text-gray-600">Year-over-Year</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div 
                      className="h-2 rounded-full bg-primary-600" 
                      style={{ width: metric.accuracy }}
                    ></div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{metric.samples} training samples</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Privacy Is Our Priority
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                OncoSense is designed with privacy at its core. Our technology ensures your sensitive health data never leaves your device.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'End-to-End Encryption',
                    description: 'All communications between your device and our servers are fully encrypted.',
                    icon: <Lock className="h-5 w-5 text-primary-600" />
                  },
                  {
                    title: 'Local Processing',
                    description: 'Personal health data stays on your device, with only model updates being shared.',
                    icon: <Smartphone className="h-5 w-5 text-primary-600" />
                  },
                  {
                    title: 'No Personal Identifiers',
                    description: 'We never collect personally identifiable information with model training data.',
                    icon: <Users className="h-5 w-5 text-primary-600" />
                  },
                  {
                    title: 'Transparent Data Policies',
                    description: 'Clear, understandable privacy policies that respect your rights.',
                    icon: <Lightbulb className="h-5 w-5 text-primary-600" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-50">
                        {item.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-secondary-100 opacity-70"></div>
                </div>
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-secondary-200 opacity-70"></div>
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-secondary-300 opacity-70"></div>
                </div>
                <div className="absolute inset-16 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-white shadow-lg"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-20 w-20 text-secondary-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-700 py-16 sm:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Experience the Future of Cancer Detection
              </h2>
              <p className="mt-4 text-lg text-gray-100">
                Join the OncoSense community and help us improve early cancer detection while keeping your data private.
              </p>
              <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button className="btn bg-white text-secondary-800 hover:bg-gray-100">
                  Download App
                </button>
                <button className="btn bg-transparent text-white border border-white hover:bg-secondary-600">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILearningPage;