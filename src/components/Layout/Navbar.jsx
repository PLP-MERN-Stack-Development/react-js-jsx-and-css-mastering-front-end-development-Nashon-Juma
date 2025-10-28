// src/components/Layout/Navbar.jsx
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import Button from '../UI/Button'

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/tracking', label: 'Track Delivery' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DD</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              DroñDrop
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar