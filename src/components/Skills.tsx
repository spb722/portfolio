import React from 'react';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
      <span className="text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 75 },
    { name: 'TensorFlow', level: 60 },
    { name: 'Computer Vision', level: 50 },
    { name: 'Natural Language Processing', level: 80 },
    { name: 'Machine Learning', level: 85 },
  ];

  const toolsAndFrameworks = [
    { name: 'Docker', level: 60 },
    { name: 'Kubernetes', level: 70 },
    { name: 'AWS/GCP', level: 60 },
    { name: 'Git/GitHub', level: 40 },
    { name: 'MLflow', level: 56 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
            {toolsAndFrameworks.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;