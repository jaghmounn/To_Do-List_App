import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { authReducer } from '../auth/reducer';
import { tasksReducer } from '../tasks/reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  tasks: tasksReducer,
};