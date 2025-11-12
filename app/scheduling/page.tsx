import Scheduling from "../components/scheduling";

export default function SchedulingPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Intelligent Scheduling</h1>
        <p className="text-gray-600">
          Optimized appointment scheduling with reduced waiting times
        </p>
      </div>

      <Scheduling />
    </div>
  )
}