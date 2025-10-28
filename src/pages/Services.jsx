// src/pages/Services.jsx
import React, { useState } from 'react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [orderStep, setOrderStep] = useState(1)
  const [orderDetails, setOrderDetails] = useState({
    serviceType: '',
    pickupLocation: '',
    deliveryLocation: '',
    packageDescription: '',
    contactInfo: '',
    specialInstructions: ''
  })

  const services = [
    {
      id: 'food',
      icon: '🍕',
      title: 'Food Delivery',
      description: 'Hot meals delivered in minutes, not hours. Perfect for restaurants and cafes.',
      price: 'From $4.99',
      deliveryTime: '15-30 min',
      features: ['Temperature controlled', 'Real-time tracking', 'Contactless delivery'],
      restrictions: 'Max weight: 5kg, Temperature: -10°C to 60°C'
    },
    {
      id: 'medical',
      icon: '💊',
      title: 'Medical Supplies',
      description: 'Critical medical deliveries when time matters most.',
      price: 'From $7.99',
      deliveryTime: '10-20 min',
      features: ['Priority handling', 'Secure compartments', '24/7 emergency service'],
      restrictions: 'Medical license required, Max weight: 3kg'
    },
    {
      id: 'ecommerce',
      icon: '📦',
      title: 'E-commerce',
      description: 'Same-day delivery for online purchases and local businesses.',
      price: 'From $5.99',
      deliveryTime: '30-45 min',
      features: ['Same-day delivery', 'Package insurance', 'Flexible scheduling'],
      restrictions: 'Max weight: 10kg, Size: 40x40x40cm'
    }
  ]

  const handleGetStarted = (service) => {
    setSelectedService(service)
    setOrderDetails(prev => ({ ...prev, serviceType: service.title }))
    setShowModal(true)
    setOrderStep(1)
  }

  const handleInputChange = (field, value) => {
    setOrderDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNextStep = () => {
    if (orderStep < 4) {
      setOrderStep(prev => prev + 1)
    }
  }

  const handlePrevStep = () => {
    if (orderStep > 1) {
      setOrderStep(prev => prev - 1)
    }
  }

  const handleSubmitOrder = () => {
    // Simulate API call
    console.log('Order submitted:', orderDetails)
    
    // Generate tracking number
    const trackingNumber = `DD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    
    setOrderStep(5) // Success step
    // In a real app, you would make an API call here
  }

  const resetOrder = () => {
    setShowModal(false)
    setSelectedService(null)
    setOrderStep(1)
    setOrderDetails({
      serviceType: '',
      pickupLocation: '',
      deliveryLocation: '',
      packageDescription: '',
      contactInfo: '',
      specialInstructions: ''
    })
  }

  const renderStepContent = () => {
    switch (orderStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Service Details
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{selectedService?.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {selectedService?.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedService?.price} • {selectedService?.deliveryTime}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Package Description
              </label>
              <textarea
                value={orderDetails.packageDescription}
                onChange={(e) => handleInputChange('packageDescription', e.target.value)}
                placeholder="Describe what you're sending..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                rows="3"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Restrictions:</strong> {selectedService?.restrictions}
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Location Details
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                value={orderDetails.pickupLocation}
                onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                placeholder="Enter pickup address..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Delivery Location
              </label>
              <input
                type="text"
                value={orderDetails.deliveryLocation}
                onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                placeholder="Enter delivery address..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📍</span>
              <span>We'll verify addresses before dispatch</span>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number or Email
              </label>
              <input
                type="text"
                value={orderDetails.contactInfo}
                onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                placeholder="+1 (555) 123-4567 or email@example.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                value={orderDetails.specialInstructions}
                onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                placeholder="Any special delivery instructions..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                rows="3"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Order Summary
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Service:</span>
                <span className="font-semibold">{orderDetails.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Price:</span>
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  {selectedService?.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Estimated Delivery:</span>
                <span className="font-semibold">{selectedService?.deliveryTime}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600 dark:text-gray-300">Total:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    {selectedService?.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200">
                ✅ All set! Review your order and confirm to schedule your drone delivery.
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl text-white">✓</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Order Confirmed!
            </h3>
            
            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
              <p className="text-sm text-primary-800 dark:text-primary-200 mb-2">
                Your tracking number:
              </p>
              <p className="text-xl font-mono font-bold text-primary-600 dark:text-primary-400">
                DD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Your drone is being prepared for dispatch. You'll receive a notification when it takes off.
            </p>

            <div className="flex space-x-4">
              <Button variant="secondary" onClick={resetOrder} className="flex-1">
                New Delivery
              </Button>
              <Button variant="primary" onClick={() => window.location.href = '/tracking'} className="flex-1">
                Track Delivery
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const isStepValid = () => {
    switch (orderStep) {
      case 1:
        return orderDetails.packageDescription.trim().length > 0
      case 2:
        return orderDetails.pickupLocation.trim().length > 0 && 
               orderDetails.deliveryLocation.trim().length > 0
      case 3:
        return orderDetails.contactInfo.trim().length > 0
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the delivery service that fits your needs. All services include real-time tracking and insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} hover className="p-8 text-center flex flex-col">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {service.price}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {service.deliveryTime} delivery
                </div>
              </div>
              <ul className="text-left mb-8 space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant="accent" 
                className="w-full mt-auto"
                onClick={() => handleGetStarted(service)}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>


        {/* Order Modal */}
        <Modal 
          isOpen={showModal} 
          onClose={resetOrder}
          title={`Schedule ${selectedService?.title}`}
        >
          <div className="space-y-6">
            {/* Progress Steps */}
            {orderStep <= 4 && (
              <div className="flex justify-between mb-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step < orderStep 
                        ? 'bg-green-500 text-white' 
                        : step === orderStep 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                    }`}>
                      {step < orderStep ? '✓' : step}
                    </div>
                    <div className={`text-xs mt-2 ${
                      step === orderStep 
                        ? 'text-primary-600 dark:text-primary-400 font-semibold' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {['Details', 'Location', 'Contact', 'Review'][step - 1]}
                    </div>
                    {step < 4 && (
                      <div className={`h-1 flex-1 mt-4 ${
                        step < orderStep ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step Content */}
            {renderStepContent()}

            {/* Navigation Buttons */}
            {orderStep <= 4 && (
              <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-600">
                <Button
                  variant="secondary"
                  onClick={orderStep === 1 ? resetOrder : handlePrevStep}
                >
                  {orderStep === 1 ? 'Cancel' : 'Back'}
                </Button>
                
                <Button
                  variant="accent"
                  onClick={orderStep === 4 ? handleSubmitOrder : handleNextStep}
                  disabled={!isStepValid()}
                >
                  {orderStep === 4 ? 'Confirm Order' : 'Next'}
                </Button>
              </div>
            )}
          </div>
        </Modal>


        {/* Additional Info Section */}
        <Card className="p-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Drone Delivery?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have discovered the future of delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download App
              </Button>
              <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Services