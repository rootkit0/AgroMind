import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, setDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  constructor(private firestore: Firestore) {}

  getOrganizations(): Observable<Organization[]> {
    return collectionData(collection(this.firestore, 'organizations'), { idField: 'id' }) as Observable<Organization[]>;
  }

  saveOrganization(org: Organization) {
    const ref = doc(this.firestore, `organizations/${org.id || ''}`);
    return setDoc(ref, org, { merge: true });
  }
}
