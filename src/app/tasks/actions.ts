import { createAction, props } from '@ngrx/store';
import { Task } from '../core/models';

export const loadTasks = createAction(
  '[Tasks] Load Tasks',
  props<{ userEmail: string }>()
);

export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Omit<Task, 'id'> }>()
);

export const addTaskSuccess = createAction(
  '[Tasks] Add Task Success',
  props<{ task: Task }>()
);

export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ id: string }>()
);

export const toggleTaskStatus = createAction(
  '[Tasks] Toggle Task Status',
  props<{ id: string }>()
);

export const clearTasks = createAction('[Tasks] Clear Tasks');