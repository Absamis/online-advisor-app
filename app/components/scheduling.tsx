'use client'

import { useState } from 'react'
import { Appointment } from '../types'

const mockAppointments: Appointment[] = [
  {
    id: '1',
    studentId: 'student1',
    professionalId: 'advisor1',
    type: 'academic',
    date: '2024-01-20T14:30:00',
    status: 'scheduled'
  },
  {
    id: '2',
    studentId: 'student2',
    professionalId: 'counselor1',
    type: 'psychological',
    date: '2024-01-22T10:00:00',
    status: 'scheduled'
  }
]

export default function Scheduling() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [appointmentType, setAppointmentType] = useState<'academic' | 'psychological'>('academic')

  const availableSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ]

  const scheduleAppointment = () => {
    if (selectedDate && selectedTime) {
      const newAppointment: Appointment = {
        id: Date.now().toString(),
        studentId: 'currentStudent',
        professionalId: 'professional1',
        type: appointmentType,
        date: `${selectedDate}T${selectedTime}:00`,
        status: 'scheduled'
      }
      setAppointments([...appointments, newAppointment])
      setSelectedDate('')
      setSelectedTime('')
    }
  }

  const cancelAppointment = (appointmentId: string) => {
    setAppointments(appointments.map(apt => 
      apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
    ))
  }

  return (
    <div className="space-y-6">
      {/* Scheduling Interface */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Scheduling</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Schedule New Appointment */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Schedule New Appointment</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Appointment Type
              </label>
              <select
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value as 'academic' | 'psychological')}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="academic">Academic Advising</option>
                <option value="psychological">Psychological Counseling</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-2 border rounded-lg text-sm ${
                      selectedTime === slot
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={scheduleAppointment}
              disabled={!selectedDate || !selectedTime}
              className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Schedule Appointment
            </button>
          </div>

          {/* Upcoming Appointments */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
            <div className="space-y-3">
              {appointments.filter(apt => apt.status === 'scheduled').map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">
                        {appointment.type === 'academic' ? 'Academic Advising' : 'Psychological Counseling'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(appointment.date).toLocaleDateString()} at{' '}
                        {new Date(appointment.date).toLocaleTimeString()}
                      </p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                        appointment.status === 'scheduled' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <button
                      onClick={() => cancelAppointment(appointment.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Features */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Scheduling Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2.1</div>
            <div className="text-sm text-blue-800">Average Wait Time (days)</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">92%</div>
            <div className="text-sm text-green-800">Slot Utilization</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">15min</div>
            <div className="text-sm text-purple-800">Buffer Time</div>
          </div>
        </div>
      </div>
    </div>
  )
}