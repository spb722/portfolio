import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];  // Changed to string[] to handle array of descriptions
}

const TimelineItem = ({ title, company, date, location, description }: TimelineItemProps) => (
  <div className="relative pl-8 pb-8 border-l border-gray-300 dark:border-gray-700 last:border-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{company}</h4>
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
      <ul className="list-disc pl-4 space-y-2 text-gray-600 dark:text-gray-300">
        {description.map((item, index) => (
          <li key={index} className="text-base">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer',
      company: '6D Technologies',
      date: 'Jan 2020 - Present',
      location: 'India',
      description: [
        'Developed and deployed an innovative hybrid LSTM-CNN architecture for time series analysis in telecom product purchase prediction, improving forecast accuracy by 35% and enabling proactive inventory management',
        'Engineered and fine-tuned Large Language Models (LLMs) for domain-specific customer service chatbots, reducing response time by 60% and handling 80% of routine customer queries automatically',
        'Implemented multilingual NLP capabilities for sentiment analysis and customer intent classification across diverse telecom datasets',
        'Led cross-functional teams in developing scalable ML pipelines using AWS SageMaker and Azure ML for model training and deployment',
        'Optimized model inference time by 40% through model quantization and parallel processing techniques'
      ],
    },
    {
      title: 'Software Engineer',
      company: '6D Technologies',
      date: 'Jul 2019 - Jan 2020',
      location: 'India',
      description: [
        'Designed and implemented RESTful APIs using Python Flask and FastAPI for telecom service integration',
        'Developed microservices architecture for scalable backend systems using Java Spring Boot',
        'Collaborated with product teams to implement new features and optimize existing functionality',
        'Established CI/CD pipelines for automated testing and deployment using Jenkins and Docker'
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;