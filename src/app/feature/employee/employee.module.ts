import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent, EmployeesAddComponent],
  imports: [CommonModule, ReactiveFormsModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
