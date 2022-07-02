import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/feature/employee/model/employee';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collection: string;

  constructor(private _firestore: AngularFirestore) {
    this.collection = 'employee';
  }

  addEmployee(employee: Employee) {
    return this._firestore.collection(this.collection).add(employee);
  }
  getEmployee(id: string): Observable<any> {
    return this._firestore
      .collection(this.collection)
      .doc(id)
      .snapshotChanges();
  }

  listEmployee(): Observable<any> {
    return this._firestore
      .collection(this.collection, (ref) => ref.orderBy('createdAt', 'asc'))
      .snapshotChanges();
  }

  deleteEmployee(id: string): Promise<any> {
    return this._firestore.collection(this.collection).doc(id).delete();
  }

  editEmployee(id: string, employee: Employee): Promise<any> {
    return this._firestore.collection(this.collection).doc(id).update(employee);
  }
}
