import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
