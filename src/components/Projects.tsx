import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  category: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ExternalLink size={16} />
          Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      title: 'JobSeeker',
      description: 'AI-powered job matching and recommendation system using advanced NLP techniques.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
      tags: ['NLP', 'Python', 'Machine Learning'],
      demoLink: 'https://github.com/spb722',
      githubLink: 'https://github.com/spb722',
      category: 'nlp',
    },
    {
      title: 'MakeMe',
      description: 'Generative AI platform for creating personalized content and designs.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
      tags: ['Gen-AI', 'Deep Learning', 'FastAPI'],
      demoLink: 'https://github.com/spb722',
      githubLink: 'https://github.com/spb722',
      category: 'gen-ai',
    },
    {
      title: 'TraderPro',
      description: 'ML-powered trading platform with real-time market analysis and predictions.',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
      tags: ['Machine Learning', 'Python', 'Time Series'],
      demoLink: 'https://github.com/spb722',
      githubLink: 'https://github.com/spb722',
      category: 'analytics',
    },
    {
      title: 'Boss-Agent',
      description: 'Autonomous AI agent system for task automation and decision making.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
      tags: ['AI Agents', 'Python', 'Deep Learning'],
      demoLink: 'https://github.com/spb722',
      githubLink: 'https://github.com/spb722',
      category: 'ai-agents',
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'NLP', value: 'nlp' },
    { label: 'Gen-AI', value: 'gen-ai' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'AI Agents', value: 'ai-agents' },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Personal Projects</h2>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;