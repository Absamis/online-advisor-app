'use client'

import { useState } from 'react'
import Communication from '../components/communication'

export default function CounselingPage() {
  const [activeSection, setActiveSection] = useState('communication')

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Psychological Counseling</h1>
        <p className="text-gray-600">
          Confidential mental health support and wellness services
        </p>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4">
        {[
          { id: 'communication', label: 'Communication' },
          { id: 'resources', label: 'Wellness Resources' },
          { id: 'emergency', label: 'Emergency Support' },
          { id: 'selfcare', label: 'Self-Care Tools' }
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === section.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeSection === 'communication' && <Communication />}
      
      {activeSection === 'resources' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Wellness Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Mental Health Resources</h3>
              <div className="space-y-3">
                {[
                  'Stress Management Guide',
                  'Anxiety Coping Strategies',
                  'Depression Support Materials',
                  'Mindfulness Exercises'
                ].map((resource) => (
                  <div key={resource} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    {resource}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Support Groups</h3>
              <div className="space-y-3">
                {[
                  'Anxiety Support Group - Wed 6PM',
                  'Stress Management - Fri 4PM',
                  'Graduate Student Support - Tue 7PM',
                  'General Wellness - Mon 5PM'
                ].map((group) => (
                  <div key={group} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'emergency' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Support</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Crisis Hotline</h3>
              <p className="text-red-700">Available 24/7: <strong>1-800-273-8255</strong></p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Urgent Care</h3>
              <p className="text-yellow-700">Campus Health Center: <strong>Ext. 4111</strong></p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">After-Hours Support</h3>
              <p className="text-blue-700">Text <strong>HOME</strong> to <strong>741741</strong></p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'selfcare' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Self-Care Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Meditation Guide', icon: '🧘', description: 'Guided meditation exercises' },
              { name: 'Mood Tracker', icon: '📊', description: 'Track your daily mood' },
              { name: 'Breathing Exercises', icon: '🌬️', description: 'Calming breathing techniques' },
              { name: 'Sleep Helper', icon: '😴', description: 'Improve sleep quality' },
              { name: 'Journal Prompts', icon: '📝', description: 'Therapeutic writing exercises' },
              { name: 'Relaxation Sounds', icon: '🎵', description: 'Soothing audio experiences' }
            ].map((tool) => (
              <div key={tool.name} className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-medium text-gray-900 mb-1">{tool.name}</div>
                <div className="text-sm text-gray-600">{tool.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}