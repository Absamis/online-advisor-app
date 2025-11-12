'use client'

import { useState } from 'react'
import { AnalyticsData, Student, Intervention } from '../types'

const mockAnalytics: AnalyticsData = {
  atRiskStudents: 45,
  appointmentCompletionRate: 85,
  averageWaitTime: 2.5,
  interventionSuccessRate: 78
}

const mockInterventions: Intervention[] = [
  {
    id: '1',
    studentId: 'student1',
    type: 'Academic Support',
    startDate: '2024-01-01',
    progress: 75,
    status: 'active'
  },
  {
    id: '2',
    studentId: 'student2',
    type: 'Psychological Counseling',
    startDate: '2024-01-10',
    progress: 50,
    status: 'active'
  }
]

export default function Analytics() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month')
  const [analytics] = useState<AnalyticsData>(mockAnalytics)
  const [interventions] = useState<Intervention[]>(mockInterventions)

  const riskFactors = [
    { factor: 'Academic Performance', count: 23, trend: 'up' },
    { factor: 'Attendance Issues', count: 15, trend: 'down' },
    { factor: 'Mental Health', count: 12, trend: 'up' },
    { factor: 'Financial Stress', count: 8, trend: 'stable' }
  ]

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h2>
          <div className="flex space-x-2">
            {(['week', 'month', 'quarter'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  timeRange === range
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
          <h3 className="text-sm font-medium text-gray-500">At-Risk Students</h3>
          <p className="text-2xl font-bold text-gray-900">{analytics.atRiskStudents}</p>
          <p className="text-sm text-red-600 mt-1">+5% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
          <p className="text-2xl font-bold text-gray-900">{analytics.appointmentCompletionRate}%</p>
          <p className="text-sm text-green-600 mt-1">+2% from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
          <h3 className="text-sm font-medium text-gray-500">Avg Wait Time</h3>
          <p className="text-2xl font-bold text-gray-900">{analytics.averageWaitTime} days</p>
          <p className="text-sm text-blue-600 mt-1">-0.5 from last {timeRange}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
          <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
          <p className="text-2xl font-bold text-gray-900">{analytics.interventionSuccessRate}%</p>
          <p className="text-sm text-purple-600 mt-1">+3% from last {timeRange}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Factors */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Factors Analysis</h3>
          <div className="space-y-3">
            {riskFactors.map((risk) => (
              <div key={risk.factor} className="flex justify-between items-center p-3 border rounded-lg">
                <span className="text-gray-700">{risk.factor}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{risk.count}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    risk.trend === 'up' ? 'bg-red-100 text-red-800' :
                    risk.trend === 'down' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {risk.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intervention Progress */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Intervention Tracking</h3>
          <div className="space-y-4">
            {interventions.map((intervention) => (
              <div key={intervention.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{intervention.type}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    intervention.status === 'active' ? 'bg-green-100 text-green-800' :
                    intervention.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {intervention.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${intervention.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Started: {new Date(intervention.startDate).toLocaleDateString()}</span>
                  <span>{intervention.progress}% complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Predictive Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-orange-800">Students at High Risk</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">18</div>
            <div className="text-sm text-yellow-800">Need Follow-up</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-sm text-red-800">Urgent Intervention Needed</div>
          </div>
        </div>
      </div>
    </div>
  )
}