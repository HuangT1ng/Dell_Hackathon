import React, { useState } from 'react';
import { Camera, Upload, AlertTriangle, CheckCircle2, MoveRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PhotoAnalysis = () => {
  const [analysisStep, setAnalysisStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [selectedOption, setSelectedOption] = useState<'skin' | 'oral' | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleOptionSelect = (option: 'skin' | 'oral') => {
    setSelectedOption(option);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock image upload
    const files = e.target.files;
    if (files && files.length > 0) {
      // In a real app, we would upload the file to the server
      // For the prototype, we'll use a sample image based on the selected option
      if (selectedOption === 'skin') {
        setPreviewImage('https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      } else {
        setPreviewImage('https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      }
      simulateAnalysis();
    }
  };

  const simulateAnalysis = () => {
    setAnalysisStep('analyzing');
    // Simulate AI analysis taking time
    setTimeout(() => {
      setAnalysisStep('results');
    }, 3000);
  };

  const resetAnalysis = () => {
    setAnalysisStep('upload');
    setSelectedOption(null);
    setPreviewImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {analysisStep === 'upload' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">AI-Powered Photo Analysis</h3>
          <p className="text-gray-600 mb-8">
            Our AI can analyze photos to identify potential signs of cancer. Choose an option below to begin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => handleOptionSelect('skin')}
              className={`flex flex-col items-center p-6 border rounded-lg transition-all ${
                selectedOption === 'skin'
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <div className="rounded-full bg-primary-100 p-3 mb-3">
                <Camera className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-medium">Skin Analysis</h4>
              <p className="text-sm text-gray-600 mt-2">
                Upload a photo of a skin lesion, mole, or concerning area for AI assessment.
              </p>
            </button>

            <button
              onClick={() => handleOptionSelect('oral')}
              className={`flex flex-col items-center p-6 border rounded-lg transition-all ${
                selectedOption === 'oral'
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <div className="rounded-full bg-primary-100 p-3 mb-3">
                <Camera className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-medium">Oral Analysis</h4>
              <p className="text-sm text-gray-600 mt-2">
                Upload a photo of your mouth/throat to analyze for potential oral cancer signs.
              </p>
            </button>
          </div>

          {selectedOption && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-400 transition-colors">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                    >
                      <span>Upload a photo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG, HEIC up to 10MB</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {analysisStep === 'analyzing' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Loader2 className="mx-auto h-12 w-12 text-primary-600 animate-spin" />
          <h3 className="text-xl font-semibold mt-4 mb-2">Analyzing Your Image</h3>
          <p className="text-gray-600">
            Our AI is examining the photo for potential signs of concern.
            This will take just a moment...
          </p>
          
          {previewImage && (
            <div className="mt-8 max-w-xs mx-auto">
              <div className="relative rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={previewImage} 
                  alt="Uploaded image" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary-600 mix-blend-color opacity-10"></div>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-center space-x-4">
            <button onClick={resetAnalysis} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {analysisStep === 'results' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className={`inline-block rounded-full p-3 mb-4 ${selectedOption === 'skin' ? 'bg-yellow-100' : 'bg-green-100'}`}>
            {selectedOption === 'skin' ? (
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            ) : (
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            )}
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
          
          {previewImage && (
            <div className="my-6 max-w-md mx-auto">
              <div className="relative rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={previewImage} 
                  alt="Analyzed image" 
                  className="w-full h-auto"
                />
                
                {selectedOption === 'skin' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-yellow-500 animate-pulse"></div>
                )}
              </div>
            </div>
          )}
          
          <div className={`mt-4 p-4 rounded-md text-left ${
            selectedOption === 'skin' 
              ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' 
              : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {selectedOption === 'skin' ? (
              <>
                <p className="font-semibold">Potential Concern Detected</p>
                <p className="mt-2 text-sm">
                  Our AI has detected features that may warrant further examination. The asymmetrical shape and border irregularity of this mole shows characteristics that should be evaluated by a dermatologist.
                </p>
                <p className="mt-3 text-sm font-medium">AI Confidence Level: 76%</p>
              </>
            ) : (
              <>
                <p className="font-semibold">No Concerns Detected</p>
                <p className="mt-2 text-sm">
                  Our AI analysis found no concerning features in your oral cavity image. Continue with regular self-examinations and dental check-ups.
                </p>
                <p className="mt-3 text-sm font-medium">AI Confidence Level: 92%</p>
              </>
            )}
          </div>
          
          <div className="mt-6 text-left">
            <h4 className="font-medium text-gray-700">Recommended Next Steps:</h4>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              {selectedOption === 'skin' ? (
                <>
                  <li>Book an appointment with a dermatologist within the next 2-4 weeks</li>
                  <li>Monitor for any changes in size, color, or shape</li>
                  <li>Take monthly photos to track any changes</li>
                </>
              ) : (
                <>
                  <li>Continue regular oral self-examinations</li>
                  <li>Schedule your next dental check-up</li>
                  <li>Maintain good oral hygiene practices</li>
                </>
              )}
            </ul>
          </div>
          
          <div className="mt-8 flex justify-between">
            <button
              onClick={resetAnalysis}
              className="btn btn-outline"
            >
              Analyze Another Image
            </button>
            {selectedOption === 'skin' && (
              <button className="btn btn-primary flex items-center">
                Book Appointment <MoveRight className="ml-1 h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoAnalysis;