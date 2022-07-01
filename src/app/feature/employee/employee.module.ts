import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpoyeeDetailComponent } from './empoyee-detail/empoyee-detail.component';
import { EmpoyeesComponent } from './empoyees/empoyees.component';
import { EmpoyeeAddComponent } from './empoyee-add/empoyee-add.component';


@NgModule({
  declarations: [
    EmpoyeeDetailComponent,
    EmpoyeesComponent,
    EmpoyeeAddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
