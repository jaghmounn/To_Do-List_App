import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as TasksActions from './actions';

@Injectable()
export class TasksEffects {
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.addTask),
      map(({ task }) => {
        const newTask = { ...task, id: Date.now().toString() };
        return TasksActions.addTaskSuccess({ task: newTask });
      })
    )
  );

  constructor(private actions$: Actions) {}
}