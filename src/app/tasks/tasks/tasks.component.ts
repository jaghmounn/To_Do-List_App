import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/app.state';
import { Task } from '../../core/models';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import * as AuthActions from '../../auth/actions';
import * as TasksActions from '../actions';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  selectedTask: Task | null = null;

  constructor(private store: Store<AppState>, private router: Router) {}

  onEdit(task: Task) {
    this.selectedTask = task;
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
    this.store.dispatch(TasksActions.clearTasks());
    this.router.navigate(['/login']);
  }
}