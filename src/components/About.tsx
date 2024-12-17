import React from 'react';
import { Brain, Code, Database } from 'lucide-react';
import sidePic from '../assets/images/side-pic.png'; // Import side profile picture

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              As a Machine Learning Engineer with over 5 years of experience, I specialize in developing AI solutions and robust backend systems. My expertise spans from implementing cutting-edge deep learning models to architecting scalable applications. I'm passionate about leveraging AI to solve real-world problems and have successfully delivered projects in computer vision, natural language processing, and generative AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                <Brain className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Deep Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">PyTorch & TensorFlow</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                <Code className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">Backend Dev</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Python & Java</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                <Database className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-1">ML Systems</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Design & Development</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={sidePic}
              alt="Sachin PB"
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">5+ Years Experience</p>
              <p className="text-sm">in ML & Backend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;