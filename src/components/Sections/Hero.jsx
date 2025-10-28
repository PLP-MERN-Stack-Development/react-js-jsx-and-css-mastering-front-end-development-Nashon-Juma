import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Delivery from the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Sky
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Experience the future of delivery with our autonomous drone network. 
              Faster, greener, and more efficient than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services">
                <Button size="lg" variant="accent">
                  Start Delivery
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">30min</div>
                <div className="text-gray-600 dark:text-gray-400">Avg. Delivery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">99.8%</div>
                <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Service</div>
              </div>
            </div>
          </div>

          {/* Drone Animation */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 lg:ml-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute inset-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-6xl animate-float">🚁</div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce">
                📦
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce delay-75">
                🏠
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero