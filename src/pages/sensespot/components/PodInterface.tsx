import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Calendar, Camera, Clipboard, CheckCircle2, Loader2 } from 'lucide-react';

const PodInterface = () => {
  const [step, setStep] = useState(1);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [processingPhoto, setProcessingPhoto] = useState(false);
  const [analysisDone, setAnalysisDone] = useState(false);
  
  const maxStep = 5;
  
  const handleNextStep = () => {
    if (step === 3 && selectedTest === 'oral') {
      setProcessingPhoto(true);
      setTimeout(() => {
        setProcessingPhoto(false);
        setAnalysisDone(true);
        setStep(step + 1);
      }, 3000);
    } else {
      setStep(Math.min(step + 1, maxStep));
    }
  };
  
  const handlePrevStep = () => {
    setStep(Math.max(step - 1, 1));
    if (step === 4) {
      setAnalysisDone(false);
    }
  };
  
  const handleTestSelection = (test: string) => {
    setSelectedTest(test);
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Welcome to SenseSpot</h3>
            <p className="text-gray-600 mb-8">
              Your convenient one-stop location for cancer screening and early detection.
              Please scan your Singpass to begin.
            </p>
            
            <div className="mb-8 bg-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="mx-auto w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Clipboard className="h-16 w-16 mx-auto mb-2 text-gray-400" />
                  <p>Scan Singpass QR Code</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mb-4">
              Your data is kept secure and private in compliance with PDPA regulations.
            </p>
            
            <button
              onClick={handleNextStep}
              className="btn btn-primary px-8"
            >
              Continue <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Select Screening Type</h3>
            <p className="text-gray-600 mb-8 text-center">
              Choose the type of screening you would like to perform today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: 'fit',
                  title: 'Colorectal Cancer Screening (FIT Kit)',
                  description: 'A take-home kit to detect hidden blood in stool, which can be an early sign of colorectal cancer.',
                  recommended: false
                },
                {
                  id: 'hpv',
                  title: 'HPV Self-Sampling Kit',
                  description: 'For detection of human papillomavirus (HPV), which can cause cervical cancer.',
                  recommendedFor: 'women'
                },
                {
                  id: 'skin',
                  title: 'Skin Lesion Analysis',
                  description: 'AI-powered analysis of skin lesions or moles for potential skin cancer indicators.',
                  recommended: false
                },
                {
                  id: 'oral',
                  title: 'Oral Cancer Screening',
                  description: 'Take photos of your oral cavity to detect potential signs of oral cancer.',
                  recommended: true
                }
              ].map((test) => (
                <button
                  key={test.id}
                  onClick={() => handleTestSelection(test.id)}
                  className={`p-6 border rounded-lg text-left transition-all ${
                    selectedTest === test.id
                      ? 'border-secondary-500 bg-secondary-50 shadow'
                      : 'border-gray-200 hover:border-secondary-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-medium">{test.title}</h4>
                    {test.recommended && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {test.description}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn btn-outline"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!selectedTest}
                className="btn btn-primary"
              >
                Continue <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {selectedTest === 'oral' ? 'Oral Cancer Screening' : 
               selectedTest === 'skin' ? 'Skin Lesion Analysis' :
               selectedTest === 'fit' ? 'FIT Kit Instructions' : 
               'HPV Self-Sampling Instructions'}
            </h3>
            
            {selectedTest === 'oral' && (
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-8">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {processingPhoto ? (
                      <div className="text-center">
                        <Loader2 className="h-12 w-12 animate-spin mx-auto text-secondary-600" />
                        <p className="mt-4 text-gray-700">Analyzing image...</p>
                      </div>
                    ) : (
                      <>
                        <Camera className="h-12 w-12 text-gray-400" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
                          <button className="btn bg-white text-gray-800">
                            Capture Photo
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8 text-left">
                  <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
                    <li>Position your face in front of the camera</li>
                    <li>Open your mouth wide when prompted</li>
                    <li>Hold still while the system captures multiple angles</li>
                    <li>Follow on-screen guidance for the best results</li>
                  </ol>
                </div>
              </div>
            )}
            
            {selectedTest === 'skin' && (
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-8">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8 text-left">
                  <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
                    <li>Position the skin lesion or mole in the center of the screen</li>
                    <li>Ensure good lighting for accurate assessment</li>
                    <li>Hold still while the camera focuses</li>
                    <li>Multiple photos may be needed for complete analysis</li>
                  </ol>
                </div>
              </div>
            )}
            
            {(selectedTest === 'fit' || selectedTest === 'hpv') && (
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-8">
                  <img
                    src={selectedTest === 'fit' 
                      ? "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      : "https://images.pexels.com/photos/8460451/pexels-photo-8460451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    alt={selectedTest === 'fit' ? "FIT Kit" : "HPV Self-Sampling Kit"}
                    className="rounded-lg max-h-48 mx-auto"
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8 text-left">
                  <h4 className="font-medium text-blue-800 mb-2">Kit Collection:</h4>
                  <ol className="list-decimal list-inside text-sm text-blue-700 space-y-2">
                    <li>Your {selectedTest === 'fit' ? 'FIT Kit' : 'HPV Self-Sampling Kit'} is being dispensed below</li>
                    <li>Please take the kit and follow the included instructions</li>
                    <li>Once completed, return the sample to any SenseSpot pod or collection point</li>
                    <li>Results will be available in your OncoSense app within 7-10 days</li>
                  </ol>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn btn-outline"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                className="btn btn-primary"
              >
                {selectedTest === 'oral' || selectedTest === 'skin' 
                  ? 'Analyze' 
                  : 'Continue'} 
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="inline-block rounded-full p-4 bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">
              {(selectedTest === 'oral' || selectedTest === 'skin') ? 'Analysis Complete' : 'Kit Dispensed Successfully'}
            </h3>
            
            {(selectedTest === 'oral') && analysisDone && (
              <div className="my-6 mx-auto max-w-md">
                <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">AI Analysis Results:</h4>
                  <div className="bg-green-50 p-3 rounded border border-green-200 text-green-800 mb-4">
                    <p className="font-medium">No abnormalities detected</p>
                    <p className="text-sm mt-1">Our AI did not identify any concerning features in your oral cavity images.</p>
                  </div>
                  
                  <p className="text-sm text-gray-700 font-medium">Recommendations:</p>
                  <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                    <li>Continue regular oral self-examinations</li>
                    <li>Schedule your next dental check-up</li>
                    <li>Maintain good oral hygiene practices</li>
                  </ul>
                </div>
                
                <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 text-left">
                  <p className="font-medium text-blue-800">OncoPoints Earned: +50 points!</p>
                  <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="mt-2 text-xs text-blue-700">Progress to next reward: 60%</p>
                </div>
              </div>
            )}
            
            {(selectedTest === 'fit' || selectedTest === 'hpv') && (
              <div className="my-6 mx-auto max-w-md">
                <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Next Steps:</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Follow the instructions included with your kit</li>
                    <li>Return the sample to any SenseSpot pod or collection point</li>
                    <li>Results will be available in your OncoSense app</li>
                    <li>You'll be notified when your results are ready</li>
                  </ol>
                </div>
                
                <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 text-left">
                  <p className="font-medium text-blue-800">OncoPoints Earned: +25 points!</p>
                  <p className="text-sm text-blue-700 mt-1">Complete your test and return the sample to earn 75 more points.</p>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn btn-outline"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                className="btn btn-primary"
              >
                Book Follow-up <Calendar className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );
        
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Book Follow-up Appointment</h3>
            <p className="text-gray-600 mb-8">
              Choose a convenient time and location for your follow-up appointment.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Location</label>
                <select className="input w-full">
                  <option>Tampines Polyclinic</option>
                  <option>Bukit Merah Polyclinic</option>
                  <option>Punggol Polyclinic</option>
                  <option>Jurong Medical Centre</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <input type="date" className="input w-full" min={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Available Time Slots</label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '02:00 PM', '02:30 PM'].map((time, idx) => (
                    <button
                      key={idx}
                      className="p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border border-green-100 mb-6 text-left">
                <p className="font-medium text-green-800 flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Eligible for subsidy
                </p>
                <p className="text-sm text-green-700 mt-1">
                  Your appointment is eligible for government subsidy. Your estimated cost after subsidy: $5.00
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevStep}
                className="btn btn-outline"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Back
              </button>
              <button
                className="btn btn-primary"
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 px-4 bg-gray-800 rounded-t-lg py-3 flex items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <p className="text-white text-sm">SenseSpot Pod Interface</p>
      </div>
      <div className="border border-gray-300 rounded-b-lg p-6 bg-white">
        <div className="mb-6">
          <div className="w-full bg-gray-200 h-1.5 rounded-full">
            <div
              className="bg-secondary-600 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(step / maxStep) * 100}%` }}
            ></div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>Step {step} of {maxStep}</span>
            <span>{selectedTest ? `Selected: ${selectedTest.charAt(0).toUpperCase() + selectedTest.slice(1)} Test` : 'Select a test'}</span>
          </div>
        </div>
        
        {renderStepContent()}
      </div>
    </div>
  );
};

export default PodInterface;