import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const Services = () => {
  const services = [
    {
      icon: '🍕',
      title: 'Food Delivery',
      description: 'Hot meals delivered in minutes, not hours. Perfect for restaurants and cafes.',
      features: ['15-30 min delivery', 'Temperature controlled', 'Real-time tracking']
    },
    {
      icon: '💊',
      title: 'Medical Supplies',
      description: 'Critical medical deliveries when time matters most.',
      features: ['Priority handling', 'Secure compartments', '24/7 emergency service']
    },
    {
      icon: '📦',
      title: 'E-commerce',
      description: 'Same-day delivery for online purchases and local businesses.',
      features: ['Same-day delivery', 'Package insurance', 'Flexible scheduling']
    },
    {
      icon: '📄',
      title: 'Documents',
      description: 'Secure and fast document delivery for businesses.',
      features: ['Secure encryption', 'Digital receipts', 'Business accounts']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Delivery Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From hot meals to critical supplies, we deliver what matters most with speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="p-6 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services