import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as AuthActions from './actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map(({ email }) => {
        // Mock authentication: any valid email
        const user = { email, name: email.split('@')[0] };
        return AuthActions.loginSuccess({ user });
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        // Clear localStorage if used
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}