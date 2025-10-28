import React, { useState } from 'react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

const Tracking = () => {
  const [trackingId, setTrackingId] = useState('')
  const [delivery, setDelivery] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!trackingId.trim()) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const mockDelivery = {
        id: trackingId,
        status: 'in_transit',
        statusText: 'In Transit',
        estimatedDelivery: '2024-01-15T14:30:00Z',
        currentLocation: 'Skyway District',
        recipient: 'John Doe',
        packageType: 'Food Delivery',
        steps: [
          { time: '2024-01-15T13:00:00Z', status: 'picked_up', description: 'Package picked up from restaurant' },
          { time: '2024-01-15T13:15:00Z', status: 'in_transit', description: 'Drone departed from hub' },
          { time: '2024-01-15T13:45:00Z', status: 'in_transit', description: 'Crossing Skyway District' },
          { time: null, status: 'pending', description: 'Estimated delivery' },
        ]
      }
      setDelivery(mockDelivery)
      setLoading(false)
    }, 1000)
  }

  const getStatusColor = (status) => {
    const colors = {
      picked_up: 'bg-yellow-500',
      in_transit: 'bg-blue-500',
      delivered: 'bg-green-500',
      pending: 'bg-gray-300'
    }
    return colors[status] || 'bg-gray-300'
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Track Your Delivery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Enter your tracking number to see real-time delivery status
          </p>
        </div>

        {/* Tracking Form */}
        <Card className="p-8 mb-8">
          <form onSubmit={handleTrack} className="flex gap-4">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking number (e.g., DD-123456)"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Tracking...' : 'Track Package'}
            </Button>
          </form>
        </Card>

        {/* Delivery Status */}
        {delivery && (
          <Card className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Delivery #{delivery.id}
              </h2>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-white ${getStatusColor(delivery.status)}`}>
                  {delivery.statusText}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  Est. Delivery: {new Date(delivery.estimatedDelivery).toLocaleTimeString()}
                </span>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="space-y-4">
              {delivery.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getStatusColor(step.status)}`}>
                      {step.status !== 'pending' && '✓'}
                    </div>
                    {index < delivery.steps.length - 1 && (
                      <div className={`w-1 h-16 ${step.status !== 'pending' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {step.description}
                    </p>
                    {step.time && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(step.time).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Tracking