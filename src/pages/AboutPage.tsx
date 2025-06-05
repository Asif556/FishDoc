import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Cpu, Heart, Users } from 'lucide-react';
import { FaGithub } from "react-icons/fa"; 

const AboutPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="pt-24 pb-16 bg-neutral-50">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-primary-600 mb-4">About Fishdoc</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Learn about our mission, technology, and commitment to aquatic health.
            Fishdoc is at the forefront of fish disease detection and prevention.
          </p>
        </div>

        {/* Mission Section */}
        <motion.section
          ref={missionRef}
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
              ></div>
              <div className="p-8 lg:p-12 flex items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Heart size={24} className="text-primary-500 mr-3" />
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                  </div>
                  <p className="text-neutral-700 mb-4">
                    At Fishdoc, our mission is to revolutionize aquatic health management through 
                    accessible technology. We believe that early disease detection is critical for 
                    maintaining healthy fish populations, whether in small home aquariums or large 
                    commercial fish farms.
                  </p>
                  <p className="text-neutral-700 mb-4">
                    By combining cutting-edge artificial intelligence with expert knowledge in aquatic 
                    pathology, we've created a platform that empowers fish enthusiasts and professionals 
                    to identify and address health issues before they become severe.
                  </p>
                  <p className="text-neutral-700">
                    Our goal is to reduce fish mortality, improve aquatic welfare, and support 
                    sustainable aquaculture practices worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technology Section */}
        <motion.section
          ref={techRef}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
              <Cpu size={32} className="text-primary-600" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Technology</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fishdoc utilizes advanced AI algorithms and computer vision to accurately 
              identify fish diseases from digital images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">AI Disease Recognition</h3>
              <p className="text-neutral-600 mb-6">
                Our deep learning models have been trained on thousands of images of fish diseases, 
                allowing them to recognize subtle symptoms that might be missed by the human eye. 
                The system continuously improves as more data is processed.
              </p>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Diseases We Can Detect:</h4>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                  <li>Ich (White Spot Disease)</li>
                  <li>Fin Rot</li>
                  <li>Dropsy</li>
                  <li>Columnaris</li>
                  <li>Velvet Disease</li>
                  <li>Fish Fungus</li>
                  <li>Pop-eye</li>
                  <li>Swim Bladder Disorder</li>
                  <li>And many more...</li>
                </ul>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">How We Process Images</h3>
              <ol className="space-y-4">
                {[
                  {
                    title: "Image Pre-processing",
                    description: "We enhance image quality and isolate the fish from background elements."
                  },
                  {
                    title: "Feature Extraction",
                    description: "Our AI identifies key visual characteristics associated with different diseases."
                  },
                  {
                    title: "Disease Classification",
                    description: "Multiple neural networks work together to classify the disease with high accuracy."
                  },
                  {
                    title: "Expert Verification",
                    description: "Our system is regularly validated by aquatic veterinarians and fish health experts."
                  }
                ].map((step, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">{step.title}</h4>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.section>

        {/* Educational Resources */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
              <BookOpen size={32} className="text-primary-600" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our comprehensive guides on fish diseases, prevention methods, 
              and treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Common Fish Diseases",
                description: "Learn about the most prevalent diseases affecting freshwater and saltwater fish.",
                imageUrl: "https://images.pexels.com/photos/752504/pexels-photo-752504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Prevention Strategies",
                description: "Discover best practices for maintaining optimal water quality and fish health.",
                imageUrl: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Treatment Guidelines",
                description: "Access detailed treatment protocols for various fish diseases and conditions.",
                imageUrl: "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${resource.imageUrl})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-neutral-600 mb-4">{resource.description}</p>
                  <button className="text-primary-600 font-medium hover:underline flex items-center">
                    Learn more 
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <motion.section
  ref={teamRef}
  initial="hidden"
  animate={teamInView ? "visible" : "hidden"}
  variants={fadeIn}
>
  <div className="text-center mb-12">
    <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
      <Users size={32} className="text-primary-600" />
    </div>
    <h2 className="text-3xl font-semibold mb-4">Our Expert Team</h2>
    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
      Meet the experts behind Fishdoc – a blend of aquatic biologists, 
      veterinarians, and AI specialists dedicated to fish health.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        name: "Md Asif",
        title: "Full-Stack Developer",
        roleLine: "Handles core development from AI integration to frontend design.",
        github: "https://github.com/Asif556"
      },
      {
        name: "Pratyay Chatterjee",
        title: "Full-Stack Developer",
        roleLine: "Builds robust UI and backend services for Fishdoc’s ecosystem.",
        github: "https://github.com/pratyay-chatterjee"
      }
    ].map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-md p-6 w-72 text-center"
      >
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-2">{member.title}</p>
        <p className="text-neutral-600 mb-3">{member.roleLine}</p>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
        >
          <FaGithub size={20} className="text-neutral-700" />
        </a>
      </motion.div>
    ))}
  </div>
</motion.section>


       
      </div>
    </div>
  );
};

export default AboutPage;