import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toastr.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  loading: boolean;
  employees: Employee[];

  constructor(
    private _firebaseService: FirebaseService,
    private _toastService: ToastService
  ) {
    this.loading = false;
    this.employees = [];
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.loading = true;

    this._firebaseService.listEmployee().subscribe({
      next: (data) => {
        this.createEmployee(data);
        this.loading = false;
      },
      error: (error) => {
        this._toastService.showSuccess(error, 'Registro de empleado');
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  createEmployee(data: any): void {
    let employee: Employee;
    data.forEach((element: any) => {
      employee = {
        id: element.payload._delegate.doc.id,
        ...element.payload.doc.data(),
      };

      this.employees.push(employee);
    });
  }
}
