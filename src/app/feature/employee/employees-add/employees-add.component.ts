import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css'],
})
export class EmployeesAddComponent implements OnInit {
  createdEpmpleado: FormGroup;
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
    private _route: Router,
    private _toastService: ToastService
  ) {
    this.createdEpmpleado = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      salary: ['', [Validators.required]],
      document: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addEmployee(): void {
    this.submitted = true;
    console.log(this.createdEpmpleado);
    if (this.createdEpmpleado.invalid) return;

    let empleado: Employee = {
      name: this.createdEpmpleado.value.name,
      lastName: this.createdEpmpleado.value.lastName,
      document: this.createdEpmpleado.value.document,
      salary: this.createdEpmpleado.value.salary,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this._firebaseService
      .addEmployee(empleado)
      .then(() => {
        this._toastService.showSuccess(
          'El empleado se guardo exitosamente',
          'Registro de empleado'
        );
        this._route.navigate(['/employee/list']);
      })
      .catch((error) => {
        this._toastService.showSuccess(error, 'Registro de empleado');
      });
  }
}
