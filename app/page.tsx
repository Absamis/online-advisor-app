'use client'

import { useState } from 'react'
import { AnalyticsData, Student } from './types'
import Dashboard from './components/dashboard'
import Header from './components/header'
import Navigation from './components/nav'


const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@mapoly.edu.ng',
    department: 'Computer Science',
    level: 'ND II',
    riskLevel: 'medium'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@mapoly.edu.ng',
    department: 'Electrical Engineering',
    level: 'HND I',
    riskLevel: 'high'
  }
]

const mockAnalytics: AnalyticsData = {
  atRiskStudents: 45,
  appointmentCompletionRate: 85,
  averageWaitTime: 2.5,
  interventionSuccessRate: 78
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard students={mockStudents} analytics={mockAnalytics} />
      case 'advising':
        return <div className="p-6">Academic Advising Content</div>
      case 'counseling':
        return <div className="p-6">Psychological Counseling Content</div>
      case 'scheduling':
        return <div className="p-6">Scheduling System</div>
      case 'analytics':
        return <div className="p-6">Analytics Dashboard</div>
      default:
        return <Dashboard students={mockStudents} analytics={mockAnalytics} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}