import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toastr.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css'],
})
export class EmployeesAddComponent implements OnInit {
  createdEpmpleado: FormGroup;
  submitted: boolean;
  loading: boolean;
  idEmployee: string;
  title: string = 'Add employee';
  employee!: Employee;

  constructor(
    private _formBuilder: FormBuilder,
    private _firebaseService: FirebaseService,
    private _route: Router,
    private _toastService: ToastService,
    private _aRoute: ActivatedRoute
  ) {
    this.loading = false;
    this.submitted = false;
    this.idEmployee = '0';
    this.createdEpmpleado = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      salary: ['', [Validators.required]],
      document: ['', Validators.required],
    });
    this.initEmployee();
  }

  ngOnInit(): void {
    this.getIdRoutermployee();
  }

  initEmployee(): void {
    this.employee = {
      name: '',
      lastName: '',
      document: '',
      salary: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  getIdRoutermployee(): void {
    //let idRouter = this._aRoute.snapshot.paramMap.get('id');
    this._aRoute.params.subscribe({
      next: ({ id }) => {
        if (id !== null && id !== undefined) {
          this.idEmployee = id;
          this.title = 'Edit employee';
          this.employeeBYId();
        }
      },
    });
  }

  employeeBYId() {
    this._firebaseService.getEmployee(this.idEmployee).subscribe({
      next: (dataEmployee) => {
        this.employee.id = dataEmployee.payload.id;
        this.employee.name = dataEmployee.payload.data()['name'];
        this.employee.lastName = dataEmployee.payload.data()['lastName'];
        this.employee.document = dataEmployee.payload.data()['document'];
        this.employee.salary = dataEmployee.payload.data()['salary'];
        this.employee.createdAt = dataEmployee.payload.data()['createdAt'];
        this.employee.updatedAt = dataEmployee.payload.data()['updatedAt'];
        console.log(this.employee);
        if (this.employee.id) {
          this.createGroutEmployeeOfObjectFirebase();
        }
      },
    });
  }

  addOrEditEmployee(): void {
    this.submitted = true;
    if (this.createdEpmpleado.invalid) return;
    this.UpdateEmployeeForSendFirebase();

    if (this.idEmployee === '0') {
      this.addEmployee();
    } else {
      this.updateEmployee();
    }
    this.goRedirect();
  }

  private addEmployee(): void {
    this.loading = true;
    this._firebaseService
      .addEmployee(this.employee)
      .then(() => {
        this._toastService.showSuccess(
          'El empleado se guardo exitosamente',
          'Registro de empleado'
        );
        this.loading = false;
      })
      .catch((error) => {
        this._toastService.showSuccess(error, 'Registro de empleado');
        this.loading = false;
      });
  }

  private updateEmployee(): void {
    this.loading = true;
    this._firebaseService
      .editEmployee(this.idEmployee, this.employee)
      .then(() => {
        this._toastService.showSuccess(
          'El empleado fue editado exitosamente',
          'Registro editado'
        );
        this.loading = false;
      })
      .catch((error) => {
        this._toastService.showSuccess(error, 'Edición de empleado');
        this.loading = false;
      });
  }

  UpdateEmployeeForSendFirebase(): void {
    this.employee.name = this.createdEpmpleado.value.name;
    this.employee.lastName = this.createdEpmpleado.value.lastName;
    this.employee.document = this.createdEpmpleado.value.document;
    this.employee.salary = this.createdEpmpleado.value.salary;
    this.employee.salary = this.createdEpmpleado.value.salary;
    this.employee.updatedAt = new Date();
  }

  createGroutEmployeeOfObjectFirebase(): void {
    this.createdEpmpleado.setValue({
      name: this.employee.name,
      lastName: this.employee.lastName,
      salary: this.employee.salary,
      document: this.employee.document,
    });
  }

  goRedirect() {
    this._route.navigate(['/employee/list']);
  }
}
