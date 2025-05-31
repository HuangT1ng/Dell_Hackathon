import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Shield, AlertTriangle, CheckCircle2, Bell } from 'lucide-react';

const RiskScoreDashboard = () => {
  // Mock data for the dashboard
  const overallRiskScore = 32; // 0-100 scale
  const riskLevel = overallRiskScore <= 33 ? 'low' : overallRiskScore <= 66 ? 'medium' : 'high';
  
  const riskFactorData = [
    { name: 'Age', value: 20 },
    { name: 'Family History', value: 45 },
    { name: 'Lifestyle', value: 30 },
    { name: 'Symptom Profile', value: 25 }
  ];
  
  const riskTrendData = [
    { month: 'Jan', risk: 40 },
    { month: 'Feb', risk: 38 },
    { month: 'Mar', risk: 36 },
    { month: 'Apr', risk: 34 },
    { month: 'May', risk: 32 }
  ];
  
  const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F'];
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-1">Your Cancer Risk Dashboard</h3>
        <p className="text-gray-600 text-sm">
          Personalized assessment based on your profile and inputs
        </p>
      </div>
      
      {/* Overall Risk Score */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
                <circle
                  className={`${
                    riskLevel === 'low' 
                      ? 'text-green-500' 
                      : riskLevel === 'medium' 
                        ? 'text-yellow-500' 
                        : 'text-red-500'
                  }`}
                  strokeWidth="10"
                  strokeDasharray={`${overallRiskScore * 3.52} 352`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
              </svg>
              <span className="absolute text-2xl font-bold text-gray-800">
                {overallRiskScore}%
              </span>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-medium mb-2">Overall Risk Assessment</h4>
            <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
              riskLevel === 'low' 
                ? 'bg-green-100 text-green-800' 
                : riskLevel === 'medium' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-red-100 text-red-800'
            }`}>
              {riskLevel === 'low' ? (
                <CheckCircle2 className="mr-1 h-4 w-4" />
              ) : riskLevel === 'medium' ? (
                <AlertTriangle className="mr-1 h-4 w-4" />
              ) : (
                <Bell className="mr-1 h-4 w-4 animate-pulse" />
              )}
              <span className="capitalize">{riskLevel} Risk</span>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              Your current risk score indicates a {riskLevel} risk level for cancer development based on your profile, medical history, and reported symptoms.
            </p>
            
            <button className="mt-4 btn btn-outline">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
      
      {/* Risk Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-lg font-medium mb-4">Risk Factors Breakdown</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskFactorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {riskFactorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-lg font-medium mb-4">Risk Trend Over Time</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={riskTrendData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="risk" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      {/* Action Plan */}
      <motion.div 
        className="card bg-primary-50 border-primary-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Shield className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-primary-900">Personalized Action Plan</h4>
            <p className="mt-1 text-primary-700">
              Based on your risk assessment, we recommend the following steps:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-primary-800">
              <li>Schedule a general wellness check with your primary care physician</li>
              <li>Consider a dermatology screening within the next 6 months</li>
              <li>Update your family medical history in your profile</li>
              <li>Track any persistent symptoms using the daily symptom tracker</li>
              <li>Book a subsidized cancer screening through OncoSense</li>
            </ul>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn btn-primary">
                Book Screening
              </button>
              <button className="btn btn-outline">
                Set Reminders
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* OncoPoints */}
      <motion.div 
        className="mt-8 card bg-gradient-to-r from-secondary-50 to-secondary-100 border-secondary-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-medium text-secondary-900">OncoPoints: 350</h4>
            <p className="text-secondary-700 text-sm">
              You've earned points for completing health assessments and screenings!
            </p>
          </div>
          <div className="bg-white p-2 rounded-full shadow-sm">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-bold">
              350
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-3 rounded-md shadow-sm">
          <p className="font-medium text-sm text-gray-700">Next reward at 500 points:</p>
          <p className="text-sm text-gray-600">$20 Pharmacy Voucher</p>
          <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-secondary-500 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RiskScoreDashboard;