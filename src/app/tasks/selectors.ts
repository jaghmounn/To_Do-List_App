import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.state';

export const selectTasksState = (state: AppState) => state.tasks;

export const selectTasks = createSelector(
  selectTasksState,
  (state) => state.tasks
);

export const selectPendingTasks = createSelector(
  selectTasks,
  (tasks) => tasks.filter(t => t.status === 'pending')
);

export const selectCompletedTasks = createSelector(
  selectTasks,
  (tasks) => tasks.filter(t => t.status === 'completed')
);