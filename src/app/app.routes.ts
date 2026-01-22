import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
