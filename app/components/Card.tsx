import React from 'react'

interface CardProps {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-white dark:bg-gray-900 p-6 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
        Learn More
      </button>
    </div>
  )
}

export default Card
