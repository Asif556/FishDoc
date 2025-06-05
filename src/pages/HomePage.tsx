import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BarChart2, Search, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card p-6 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <Parallax
        bgImage="https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1600"
        strength={500}
        className="h-screen"
        bgImageStyle={{ opacity: '0.7' }}
        renderLayer={(percentage) => (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(3, 105, 161, ${0.6 + percentage * 0.3})`,
            }}
          />
        )}
      >
        <div className="parallax-content">
          <div className="container-custom h-full flex flex-col justify-center pt-24">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="mb-6 text-white font-bold">
                Advanced Fish Disease Detection with AI Technology
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Protect your aquatic ecosystems with cutting-edge image analysis.
                Upload a photo and get instant disease identification.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/detection" className="btn-primary">
                  Detect Disease Now
                </Link>
                <Link to="/about" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Parallax>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 mb-4">Our Features</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fishdoc combines advanced AI algorithms with expert knowledge to provide
              accurate and fast disease detection for your aquatic animals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Search size={32} />}
              title="Accurate Detection"
              description="Our AI model has been trained on thousands of fish disease images for precise identification."
              delay={0.1}
            />
            <FeatureCard
              icon={<Zap size={32} />}
              title="Instant Results"
              description="Get disease analysis in seconds, allowing for faster treatment decisions."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Prevention Advice"
              description="Receive tailored recommendations to prevent disease spread in your aquarium or fish farm."
              delay={0.3}
            />
            <FeatureCard
              icon={<BarChart2 size={32} />}
              title="Tracking & History"
              description="Monitor the health of your fish over time with comprehensive tracking features."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our disease detection system is simple to use and provides rapid results,
              helping you maintain the health of your aquatic ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Image',
                description: 'Take a clear photo of your fish showing any visible signs of disease.',
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our advanced AI system analyzes the image for signs of common fish diseases.',
              },
              {
                step: '03',
                title: 'Get Results',
                description: 'Receive detailed results including disease identification and treatment recommendations.',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-primary-50 rounded-xl p-8 h-full">
                  <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary-300">
                    <ArrowRight size={40} className="animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 mb-4">What Our Users Say</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from fish enthusiasts and professionals who use our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Fishdoc helped me identify a bacterial infection in my aquarium before it spread to other fish. The treatment recommendations were spot on!",
                name: "Michael T.",
                title: "Aquarium Enthusiast"
              },
              {
                quote: "As a commercial fish farmer, early disease detection is crucial. This platform has saved us thousands in potential losses by catching problems early.",
                name: "Sarah L.",
                title: "Fish Farm Manager"
              },
              {
                quote: "The accuracy of the disease detection is impressive. I've compared the results with laboratory tests and they match perfectly.",
                name: "Dr. James Wilson",
                title: "Marine Biologist"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card p-8"
              >
                <div className="text-primary-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="italic text-neutral-700 mb-6">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 water-bg text-white">
        <div className="container-custom">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Ready to Protect Your Aquatic Ecosystem?</h2>
            <p className="text-xl mb-8">
              Start using our disease detection technology today and ensure the health and longevity of your fish.
            </p>
            <Link to="/detection" className="btn bg-white text-primary-600 hover:bg-neutral-100">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;