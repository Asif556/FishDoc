import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fish, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16 flex items-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block"
            >
              <Fish size={120} className="text-primary-400" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neutral-800">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-600">Page Not Found</h2>
          
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Looks like this fish has swum away! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;