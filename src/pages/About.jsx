// src/pages/About.jsx
import React from 'react'
import Card from '../components/UI/Card'

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former aerospace engineer with 10+ years in autonomous systems',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'AI and robotics expert from MIT Robotics Lab',
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Safety',
      bio: 'Aviation safety specialist with FAA background',
      avatar: '👩‍⚕️'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Deliveries Completed' },
    { number: '50+', label: 'Cities Served' },
    { number: '99.8%', label: 'Success Rate' },
    { number: '30min', label: 'Average Delivery Time' }
  ]

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About DroñDrop
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We're revolutionizing the delivery industry with cutting-edge drone technology, 
            making deliveries faster, greener, and more accessible than ever before.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To transform urban logistics by creating the world's most efficient and 
                environmentally friendly delivery network using autonomous drone technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Reducing carbon emissions by 90% compared to traditional delivery</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Cutting delivery times from hours to minutes</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Making delivery accessible 24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Eco-Friendly Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our electric drones produce zero emissions and use 95% less energy than delivery trucks.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About