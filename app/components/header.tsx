export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">
                MAPOLY Support Portal
              </h1>
            </div>
            <div className="hidden md:block ml-10">
              <p className="text-gray-600">
                Integrated Academic Advising & Psychological Counseling
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
              Student Login
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Professional Portal
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}