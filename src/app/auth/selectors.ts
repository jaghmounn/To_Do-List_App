import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.state';

export const selectAuthState = (state: AppState) => state.auth;

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectIsAuthenticated = createSelector(
  selectUser,
  (user) => !!user
);