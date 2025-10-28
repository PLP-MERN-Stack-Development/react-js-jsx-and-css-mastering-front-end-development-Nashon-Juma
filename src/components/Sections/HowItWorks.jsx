import React from 'react'
import Card from '../UI/Card'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Place Your Order',
      description: 'Use our app or website to schedule a delivery. Choose your items and delivery location.',
      icon: '📱'
    },
    {
      number: '2',
      title: 'Drone Dispatch',
      description: 'Our automated system dispatches the nearest available drone to pick up your package.',
      icon: '🚁'
    },
    {
      number: '3',
      title: 'In-Flight Tracking',
      description: 'Track your delivery in real-time with live GPS updates and estimated arrival time.',
      icon: '📍'
    },
    {
      number: '4',
      title: 'Safe Delivery',
      description: 'The drone safely delivers your package to the specified location using precision landing.',
      icon: '🎯'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How DroñDrop Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of delivery in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} hover className="p-6 text-center relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks