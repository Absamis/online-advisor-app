'use client'

import { useState } from 'react'
import { Message } from '../types'

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: 'student1',
    receiverId: 'advisor1',
    content: 'I need help with my course registration for next semester.',
    timestamp: new Date('2024-01-15T10:30:00'),
    type: 'async'
  },
  {
    id: '2',
    senderId: 'advisor1',
    receiverId: 'student1',
    content: 'I can help you with that. When are you available for a meeting?',
    timestamp: new Date('2024-01-15T11:15:00'),
    type: 'realtime'
  }
]

export default function Communication() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [newMessage, setNewMessage] = useState('')
  const [messageType, setMessageType] = useState<'realtime' | 'async'>('realtime')

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        senderId: 'currentUser',
        receiverId: 'recipient',
        content: newMessage,
        timestamp: new Date(),
        type: messageType
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Secure Communication</h2>
        <p className="text-gray-600">Real-time and asynchronous messaging</p>
      </div>
      
      <div className="p-6">
        {/* Message Type Selector */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setMessageType('realtime')}
            className={`px-4 py-2 rounded-lg ${
              messageType === 'realtime'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Real-time Chat
          </button>
          <button
            onClick={() => setMessageType('async')}
            className={`px-4 py-2 rounded-lg ${
              messageType === 'async'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Asynchronous Messages
          </button>
        </div>

        {/* Messages Container */}
        <div className="border rounded-lg h-96 overflow-y-auto p-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.senderId === 'currentUser' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.senderId === 'currentUser'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.senderId === 'currentUser' ? 'text-primary-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()} • {message.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Send
          </button>
        </div>

        {/* Security Features */}
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Security Features</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• End-to-end encryption</li>
            <li>• Secure message storage</li>
            <li>• Access logging</li>
            <li>• Data privacy compliance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}