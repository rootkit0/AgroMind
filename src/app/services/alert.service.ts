import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, collectionData } from '@angular/fire/firestore';
import { Alert } from '../models/alert';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private firestore: Firestore) {}

  getUserAlerts(userId: string): Observable<Alert[]> {
    const ref = collection(this.firestore, `users/${userId}/alerts`);
    return collectionData(ref, { idField: 'id' }) as Observable<Alert[]>;
  }

  saveAlert(userId: string, alert: Alert) {
    const ref = doc(this.firestore, `users/${userId}/alerts/${alert.id || ''}`);
    return setDoc(ref, alert, { merge: true });
  }
}
