import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [TaskListComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    mockStore.select.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggle action', () => {
    component.toggleStatus('1');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

  it('should dispatch delete action on confirm', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteTask('1');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});