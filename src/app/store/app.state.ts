import { Task } from '../core/models';

export interface AuthState {
  user: { email: string; name?: string } | null;
}

export interface TasksState {
  tasks: Task[];
}

export interface AppState {
  auth: AuthState;
  tasks: TasksState;
}