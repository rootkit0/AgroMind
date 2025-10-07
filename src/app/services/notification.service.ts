import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private firestore: Firestore) {}

  getUserNotifications(userId: string): Observable<Notification[]> {
    const ref = collection(this.firestore, `users/${userId}/notifications`);
    return collectionData(ref, { idField: 'id' }) as Observable<Notification[]>;
  }

  saveNotification(userId: string, notification: Notification) {
    const ref = doc(this.firestore, `users/${userId}/notifications/${notification.id || ''}`);
    return setDoc(ref, notification, { merge: true });
  }
}
