export interface User {
  email: string;
  name?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: number; // 1-5
  dueDate: Date;
  status: 'pending' | 'completed';
  userEmail: string;
}