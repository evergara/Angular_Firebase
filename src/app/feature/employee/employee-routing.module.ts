import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee.component';

const DEFAULT_ROUTE = 'list';
const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full',
  },
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: DEFAULT_ROUTE,
        component: EmployeesComponent,
      },
      {
        path: 'add',
        component: EmployeesAddComponent,
      },
      {
        path: 'edit/:id',
        component: EmployeesAddComponent,
      },
      {
        path: '**',
        redirectTo: DEFAULT_ROUTE,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
