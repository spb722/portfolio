import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/images/profile-pic-new.png'; // Import profile picture

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block">Hi, I'm Sachin PB</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                AI/ML Enthusiast
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm passionate about building AI solutions with 5+ years of experience in ML/AI and backend development.
              Expert in deep learning, computer vision, NLP, and generative AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/spb722" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sachin-pb-76270b163" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:spb722@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-blue-600/10 rounded-full animate-pulse"></div>
              <img
                src={profilePic}
                alt="Sachin PB"
                className="relative w-full h-full rounded-full object-cover border-4 border-blue-600/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;