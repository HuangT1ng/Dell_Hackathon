import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const SymptomChecker = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    smoking: '',
    familyHistory: '',
    symptoms: [] as string[],
  });
  
  const availableSymptoms = [
    'Persistent cough',
    'Unexplained weight loss',
    'Fatigue',
    'Change in bowel habits',
    'Unexplained pain',
    'Difficulty swallowing',
    'Unusual bleeding or discharge',
    'Skin changes',
    'Lump or thickening',
    'Indigestion or difficulty swallowing'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSymptomToggle = (symptom: string) => {
    setFormData({
      ...formData,
      symptoms: formData.symptoms.includes(symptom)
        ? formData.symptoms.filter(s => s !== symptom)
        : [...formData.symptoms, symptom]
    });
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="input"
                  min="18"
                  max="120"
                />
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={nextStep}
                  className="btn btn-primary"
                  disabled={!formData.age || !formData.gender}
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Lifestyle & History</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="smoking" className="block text-sm font-medium text-gray-700 mb-1">Smoking Status</label>
                <select
                  id="smoking"
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="">Select status</option>
                  <option value="never">Never smoked</option>
                  <option value="former">Former smoker</option>
                  <option value="current">Current smoker</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="familyHistory" className="block text-sm font-medium text-gray-700 mb-1">Family History of Cancer</label>
                <select
                  id="familyHistory"
                  name="familyHistory"
                  value={formData.familyHistory}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="">Select</option>
                  <option value="none">No history</option>
                  <option value="distant">Distant relatives only</option>
                  <option value="immediate">Immediate family (parents, siblings)</option>
                </select>
              </div>
              
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevStep}
                  className="btn btn-outline"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="btn btn-primary"
                  disabled={!formData.smoking || !formData.familyHistory}
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Symptoms</h3>
            <p className="text-sm text-gray-600 mb-4">Select any symptoms you've experienced recently or consistently:</p>
            
            <div className="space-y-2 max-h-64 overflow-y-auto p-2">
              {availableSymptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`symptom-${idx}`}
                    checked={formData.symptoms.includes(symptom)}
                    onChange={() => handleSymptomToggle(symptom)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`symptom-${idx}`} className="ml-2 block text-sm text-gray-700">
                    {symptom}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="btn btn-outline"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="btn btn-primary"
              >
                Get Results <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );
      
      case 4:
        // Risk calculation (simplified for demo)
        const riskFactors = [];
        let riskLevel = 'low';
        
        if (parseInt(formData.age) > 50) riskFactors.push('Age above 50');
        if (formData.smoking === 'current') {
          riskFactors.push('Current smoker');
          riskLevel = 'medium';
        }
        if (formData.familyHistory === 'immediate') {
          riskFactors.push('Family history of cancer');
          riskLevel = 'medium';
        }
        if (formData.symptoms.length > 3) {
          riskFactors.push('Multiple symptoms reported');
          riskLevel = 'high';
        }
        if (formData.symptoms.includes('Unexplained weight loss') && formData.symptoms.includes('Persistent cough')) {
          riskFactors.push('Combination of significant symptoms');
          riskLevel = 'high';
        }
        
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <div className={`inline-block rounded-full p-3 mb-4 ${
              riskLevel === 'low' ? 'bg-green-100' : 
              riskLevel === 'medium' ? 'bg-yellow-100' : 
              'bg-red-100'
            }`}>
              <CheckCircle2 className={`h-8 w-8 ${
                riskLevel === 'low' ? 'text-green-600' : 
                riskLevel === 'medium' ? 'text-yellow-600' : 
                'text-red-600'
              }`} />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Your Assessment Results</h3>
            
            <div className={`mt-4 p-4 rounded-md ${
              riskLevel === 'low' ? 'bg-green-50 text-green-800' : 
              riskLevel === 'medium' ? 'bg-yellow-50 text-yellow-800' : 
              'bg-red-50 text-red-800'
            }`}>
              <p className="font-bold">
                {riskLevel === 'low' 
                  ? 'Low Risk' 
                  : riskLevel === 'medium' 
                    ? 'Medium Risk - Follow Up Recommended' 
                    : 'High Risk - Immediate Attention Required'}
              </p>
            </div>
            
            {riskFactors.length > 0 && (
              <div className="mt-6 text-left">
                <h4 className="font-medium text-gray-700">Risk Factors Identified:</h4>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                  {riskFactors.map((factor, idx) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-md">
              <h4 className="font-medium">Recommended Next Steps:</h4>
              <ul className="mt-2 space-y-1 list-disc list-inside text-blue-700">
                {riskLevel === 'low' && (
                  <>
                    <li>Continue regular self-monitoring</li>
                    <li>Schedule routine check-up in 12 months</li>
                  </>
                )}
                {riskLevel === 'medium' && (
                  <>
                    <li>Book a screening appointment within 3 months</li>
                    <li>Consider SenseSpot pod visit for preliminary testing</li>
                    <li>Track symptoms using the OncoSense app</li>
                  </>
                )}
                {riskLevel === 'high' && (
                  <>
                    <li>Book a screening appointment immediately</li>
                    <li>Consult with healthcare provider within 1 week</li>
                    <li>Enable daily symptom tracking reminders</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="btn btn-outline"
              >
                Start Over
              </button>
              <button
                className="btn btn-primary"
              >
                Book Screening
              </button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className="flex flex-col items-center">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= stepNumber ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > stepNumber ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className="mt-2 text-xs text-gray-500">
                  {stepNumber === 1 && 'Personal Info'}
                  {stepNumber === 2 && 'Lifestyle'}
                  {stepNumber === 3 && 'Symptoms'}
                  {stepNumber === 4 && 'Results'}
                </span>
              </div>
              
              {stepNumber < 4 && (
                <div className={`flex-1 h-1 mx-2 ${
                  step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default SymptomChecker;