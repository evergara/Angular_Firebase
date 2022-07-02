import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/feature/employee/model/employee';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private _firestore: AngularFirestore) {}

  addEmployee(employee: Employee) {
    return this._firestore.collection('employee').add(employee);
  }
  getEmployee(id: string): Observable<any> {
    return this._firestore.collection('employee').doc(id).snapshotChanges();
  }

  listEmployee(): Observable<any> {
    return this._firestore
      .collection('employee', (ref) => ref.orderBy('createdAt', 'asc'))
      .snapshotChanges();
  }

  deleteEmployee(id: string): Promise<any> {
    return this._firestore.collection('employee').doc(id).delete();
  }

  editEmployee(id: string, employee: Employee): Promise<any> {
    return this._firestore.collection('employee').doc(id).update(employee);
  }
}
