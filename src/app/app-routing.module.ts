import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./feature/employee/employee.module').then(
        (mod) => mod.EmployeeModule
      ),
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
