import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, doc, collectionData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor';
import { SensorReading } from '../models/sensor-reading';
import { Alert } from '../models/alert';

@Injectable({ providedIn: 'root' })
export class AgrosenseService {
  private apiUrl = 'https://api.agromind.io/agrosense';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getUserSensors(): Observable<Sensor[]> {
    return collectionData(collection(this.firestore, 'sensors'), { idField: 'id' }) as Observable<Sensor[]>;
  }

  getSensorById(id: string): Observable<Sensor> {
    return collectionData(collection(this.firestore, `sensors/${id}`)) as unknown as Observable<Sensor>;
  }

  subscribeRealtime(sensorId: string): Observable<SensorReading[]> {
    const ref = collection(this.firestore, `sensors/${sensorId}/readings`);
    return collectionData(ref, { idField: 'id' }) as Observable<SensorReading[]>;
  }

  getSensorHistory(sensorId: string, days: number): Observable<SensorReading[]> {
    return this.http.get<SensorReading[]>(`${this.apiUrl}/history/${sensorId}?days=${days}`);
  }

  saveAlertConfig(alert: Alert) {
    const ref = doc(this.firestore, `alerts/${alert.id || ''}`);
    return setDoc(ref, alert, { merge: true });
  }
}
