import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../store/app.state';
import { Task } from '../../../core/models';
import { selectTasks } from '../../selectors';
import * as TasksActions from '../../actions';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() edit = new EventEmitter<Task>();
  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit() {
    // Load tasks for current user, but since mock, assume loaded
  }

  toggleStatus(id: string) {
    this.store.dispatch(TasksActions.toggleTaskStatus({ id }));
  }

  editTask(task: Task) {
    // For simplicity, just log; in real app, open edit form
    console.log('Edit task', task);
  }

  deleteTask(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.store.dispatch(TasksActions.deleteTask({ id }));
    }
  }

  getPriorityClass(priority: number): string {
    const classes = {
      1: 'bg-gray-100 text-gray-800',
      2: 'bg-blue-100 text-blue-800',
      3: 'bg-yellow-100 text-yellow-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800',
    };
    return classes[priority as keyof typeof classes] || classes[1];
  }
}