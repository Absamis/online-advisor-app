export interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  level: string;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface Appointment {
  id: string;
  studentId: string;
  professionalId: string;
  type: 'academic' | 'psychological';
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'realtime' | 'async';
}

export interface Intervention {
  id: string;
  studentId: string;
  type: string;
  startDate: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
}

export interface AnalyticsData {
  atRiskStudents: number;
  appointmentCompletionRate: number;
  averageWaitTime: number;
  interventionSuccessRate: number;
}

// ... existing types ...

export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  department: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'academic' | 'psychological' | 'emergency';
  description: string;
  contact?: string;
}

export interface RiskFactor {
  factor: string;
  count: number;
  trend: 'up' | 'down' | 'stable';
}