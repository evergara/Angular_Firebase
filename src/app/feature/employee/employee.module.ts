import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';


@NgModule({
  declarations: [
 
  
    EmployeeComponent,
         EmployeesComponent,
         EmployeesAddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
