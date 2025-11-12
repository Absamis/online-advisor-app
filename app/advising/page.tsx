'use client'

import { useState } from 'react'
import Communication from '../components/communication'

export default function AdvisingPage() {
  const [activeSection, setActiveSection] = useState('communication')

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Advising</h1>
        <p className="text-gray-600">
          Professional academic guidance and course planning support
        </p>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4">
        {[
          { id: 'communication', label: 'Communication' },
          { id: 'courses', label: 'Course Planning' },
          { id: 'progress', label: 'Academic Progress' },
          { id: 'resources', label: 'Resources' }
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
      
      {activeSection === 'courses' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Recommended Courses</h3>
              <div className="space-y-2">
                {['Computer Science 301', 'Mathematics 205', 'Statistics 101', 'Research Methods'].map((course) => (
                  <div key={course} className="flex justify-between items-center p-3 border rounded-lg">
                    <span>{course}</span>
                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                      Add to Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Your Course Plan</h3>
              <div className="space-y-2">
                {['Introduction to Programming', 'Database Systems', 'Web Development'].map((course) => (
                  <div key={course} className="flex justify-between items-center p-3 border rounded-lg">
                    <span>{course}</span>
                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'progress' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3.45</div>
              <div className="text-sm text-blue-800">Current GPA</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-green-800">Attendance Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-800">Completed Courses</div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Study Guides', icon: '📚' },
              { name: 'Tutoring Services', icon: '👨‍🏫' },
              { name: 'Library Resources', icon: '🏛️' },
              { name: 'Career Counseling', icon: '💼' },
              { name: 'Scholarship Info', icon: '🎓' },
              { name: 'Research Support', icon: '🔬' }
            ].map((resource) => (
              <div key={resource.name} className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                <div className="text-2xl mb-2">{resource.icon}</div>
                <div className="font-medium text-gray-900">{resource.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}