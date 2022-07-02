import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeesComponent, EmployeesAddComponent, SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
