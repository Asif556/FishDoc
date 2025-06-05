import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  Check, 
  UploadCloud, 
  X, 
  Loader2, 
  Trash2,
  FileWarning
} from 'lucide-react';
import { detectDisease, type Detection } from '../utils/api';

const DetectionPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ image: string; detections: Detection[] } | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    setResult(null);
    
    if (acceptedFiles.length === 0) {
      return;
    }
    
    const selectedFile = acceptedFiles[0];
    
    // Check file type
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please upload an image file (JPEG, PNG, etc.)');
      return;
    }
    
    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit');
      return;
    }
    
    setFile(selectedFile);
    
    // Create image preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
  });

  const handleClearImage = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  const handleDetectDisease = async () => {
    if (!file) {
      setError('Please upload an image first');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await detectDisease(file);
      setResult(response);
    } catch (err) {
      console.error('Error detecting disease:', err);
      setError('Failed to process the image. Please try again or use a different image.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-primary-600 mb-4">Fish Disease Detection</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Upload a clear image of your fish showing any visible signs of disease,
            and our AI system will analyze it to identify potential health issues.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
              
              {!preview ? (
                <div 
                  {...getRootProps()} 
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${isDragActive 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-neutral-300 hover:border-primary-400 hover:bg-neutral-100'
                    }`}
                >
                  <input {...getInputProps()} />
                  <UploadCloud 
                    className={`mx-auto mb-4 ${isDragActive ? 'text-primary-500' : 'text-neutral-400'}`} 
                    size={48} 
                  />
                  {isDragActive ? (
                    <p className="text-primary-600 font-medium">Drop the image here...</p>
                  ) : (
                    <div>
                      <p className="text-neutral-600 mb-2">Drag & drop an image here, or click to select</p>
                      <p className="text-neutral-400 text-sm">Supports: JPEG, PNG (Max: 5MB)</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={preview} 
                      alt="Fish preview" 
                      className="w-full h-auto rounded-lg object-contain max-h-72 mx-auto"
                    />
                    <button 
                      onClick={handleClearImage}
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-neutral-100 transition-colors"
                      aria-label="Remove image"
                    >
                      <Trash2 size={20} className="text-error-500" />
                    </button>
                  </motion.div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-neutral-500 mb-2">
                      {file?.name} ({(file?.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <button
                      onClick={handleDetectDisease}
                      disabled={isLoading}
                      className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Detect Disease'
                      )}
                    </button>
                  </div>
                </div>
              )}
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-error-50 text-error-700 p-3 rounded-lg flex items-center"
                >
                  <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </div>
            
            {/* Results Section */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Detection Results</h2>
              
              {isLoading ? (
                <div className="py-10 text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mx-auto mb-4 text-primary-500"
                  >
                    <Loader2 size={48} />
                  </motion.div>
                  <p className="text-neutral-600">Analyzing your image...</p>
                  <p className="text-neutral-400 text-sm mt-2">This may take a few moments</p>
                </div>
              ) : result ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={result.image} 
                      alt="Analyzed fish" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {result.detections.map((detection, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-primary-50 rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-primary-800">
                          {detection.type === 'human' ? 'Human Detected' : 'Fish Disease Detected'}
                        </h3>
                        <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-600 border border-primary-200">
                          {(detection.confidence * 100).toFixed(1)}% Confidence
                        </div>
                      </div>
                      {detection.type === 'fish' && detection.disease && (
                        <p className="text-lg font-semibold text-primary-700">
                          {detection.disease}
                        </p>
                      )}
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="py-10 text-center text-neutral-500">
                  <FileWarning size={48} className="mx-auto mb-4 text-neutral-300" />
                  <p>No results yet</p>
                  <p className="text-sm text-neutral-400 mt-2">Upload an image and click "Detect Disease"</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Instructions */}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Tips for Better Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clear Images",
                  description: "Use well-lit, clear images that show the affected areas of the fish in detail."
                },
                {
                  title: "Multiple Angles",
                  description: "If the disease symptoms are not detected, try uploading images from different angles."
                },
                {
                  title: "Include Context",
                  description: "For better analysis, ensure the entire fish is visible in the image when possible."
                }
              ].map((tip, index) => (
                <div key={index} className="flex">
                  <div className="mr-3 mt-1 text-primary-500">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">{tip.title}</h4>
                    <p className="text-neutral-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionPage;