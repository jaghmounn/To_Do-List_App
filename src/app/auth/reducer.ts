import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../store/app.state';
import * as AuthActions from './actions';

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
  }))
);