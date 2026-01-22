import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../store/app.state';
import { selectUser } from '../../../auth/selectors';
import * as TasksActions from '../../actions';
import { Task } from '../../../core/models';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnChanges {
  taskForm: FormGroup;
  userEmail: string = '';
  @Input() taskToEdit: Task | null = null;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      priority: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      dueDate: ['', Validators.required],
    });
  }
 

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.taskForm.patchValue({
        title: this.taskToEdit.title,
        description: this.taskToEdit.description,
        priority: this.taskToEdit.priority,
        dueDate: this.taskToEdit.dueDate.toISOString().split('T')[0]
      });
    }
  }

  onSubmit() {
    if (this.taskForm.valid && this.userEmail) {
      if (this.taskToEdit) {
        // Update existing task
        const updatedTask = {
          ...this.taskToEdit,
          ...this.taskForm.value,
          dueDate: new Date(this.taskForm.value.dueDate)
        };
        this.store.dispatch(TasksActions.updateTask({ task: updatedTask }));
        this.taskToEdit = null; // Reset
        this.taskForm.reset({ priority: 1 });
      } else {
        // Add new task
        const task = {
          ...this.taskForm.value,
          dueDate: new Date(this.taskForm.value.dueDate),
          status: 'pending' as const,
          userEmail: this.userEmail,
          id: Date.now().toString(),
        };
        this.store.dispatch(TasksActions.addTaskSuccess({ task }));
        this.taskForm.reset({ priority: 1 });
      }
    }
  }

  cancelEdit() {
    this.taskToEdit = null;
    this.taskForm.reset({ priority: 1 });
  }
}