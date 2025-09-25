import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private user: AngularFirestoreCollection<User>;
  
  constructor(private db: AngularFirestore) {
    this.user = db.collection<User>('/users');
  }

  //CRUD USERS database operations
  getUsers(): Observable<User[]> {
    return this.user.valueChanges();    
  }
  
  getUser(uid: string): Observable<User> {
    return this.user.doc(uid).get().pipe(
      map(
        docSnapshot => {
          const data = JSON.parse(JSON.stringify(docSnapshot.data()));
          return data as User;
        }
      )
    );
  }

  createUser(user: User) {
    this.user.doc().set(Object.assign({}, user));
  }

  updateUser(uid: string, user: User) {
    this.user.doc(uid).update(user);
  }

  deleteUser(uid: string) {
    this.user.doc(uid).delete();
  }
}
