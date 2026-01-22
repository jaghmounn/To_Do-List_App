import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, ReactiveFormsModule],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockStore.select.and.returnValue(of({ email: 'test@example.com' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch add task action on valid form submit', () => {
    component.taskForm.setValue({
      title: 'Test Task',
      description: 'Test Description',
      priority: 1,
      dueDate: '2026-01-23'
    });
    component.onSubmit();
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});