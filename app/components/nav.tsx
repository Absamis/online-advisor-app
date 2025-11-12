interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'advising', label: 'Academic Advising' },
    { id: 'counseling', label: 'Counseling' },
    { id: 'scheduling', label: 'Scheduling' },
    { id: 'analytics', label: 'Analytics' },
  ]

  return (
    <nav className="w-64 bg-white shadow-sm min-h-screen p-4">
      <div className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Objectives</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Integrated Online Portal</li>
          <li>• Secure Communication</li>
          <li>• Intelligent Scheduling</li>
          <li>• Intervention Tracking</li>
          <li>• Data Analytics</li>
        </ul>
      </div>
    </nav>
  )
}