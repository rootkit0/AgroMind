import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Field } from '../models/field';
import { FieldAnalysis } from '../models/field-analysis';

@Injectable({ providedIn: 'root' })
export class AgromonitorService {
  private backendUrl = 'https://api.agromind.io/agromonitor'; // your Python server

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getUserFields(): Observable<Field[]> {
    return collectionData(collection(this.firestore, 'fields'), { idField: 'id' }) as Observable<Field[]>;
  }

  getFieldById(id: string): Observable<Field> {
    return collectionData(collection(this.firestore, `fields/${id}`)) as unknown as Observable<Field>;
  }

  analyzeField(fieldId: string) {
    // call your backend to trigger satellite analysis
    return this.http.post(`${this.backendUrl}/analyze`, { fieldId });
  }

  getFieldAnalyses(fieldId: string): Observable<FieldAnalysis[]> {
    const ref = collection(this.firestore, `fields/${fieldId}/analyses`);
    return collectionData(ref, { idField: 'id' }) as Observable<FieldAnalysis[]>;
  }
}
