import { createReducer, on } from '@ngrx/store';
import { TasksState } from '../store/app.state';
import * as TasksActions from './actions';

export const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = createReducer(
  initialState,
  on(TasksActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
  })),
  on(TasksActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TasksActions.updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t),
  })),
  on(TasksActions.deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== id),
  })),
  on(TasksActions.toggleTaskStatus, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(t =>
      t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t
    ),
  })),
  on(TasksActions.clearTasks, (state) => ({
    ...state,
    tasks: [],
  }))
);