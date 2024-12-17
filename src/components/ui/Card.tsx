import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;