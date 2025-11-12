import Analytics from "../components/analytics";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Analytics</h1>
        <p className="text-gray-600">
          Comprehensive analytics for identifying at-risk students and measuring intervention effectiveness
        </p>
      </div>

      <Analytics />
    </div>
  )
}