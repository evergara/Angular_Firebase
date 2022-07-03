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
    this.listEmployees();
  }

  listEmployees(): void {
    this.loading = true;
    this._firebaseService.listEmployee().subscribe({
      next: (data) => {
        this.createEmployee(data);
        this.loading = false;
      },
      error: (error) => {
        this._toastService.showSuccess(error, 'List of employe');
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  deleteEmployees(idRmploye?: string): void {
    if (idRmploye === undefined) return;
    this.loading = true;
    this._firebaseService
      .deleteEmployee(idRmploye)
      .then(() => {
        this._toastService.showSuccess(
          'Employee have been  delete success',
          'Delete Employee'
        );
        this.loading = false;
      })
      .catch((error) => {
        this._toastService.showSuccess(error, 'Delete Employee');
        this.loading = false;
      });
  }
  
  createEmployee(data: any): void {
    this.employees = [];
    data.forEach((element: any) => {
      this.employees.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data(),
      });
    });
  }
}
