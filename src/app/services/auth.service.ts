import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Auth, authState, User, createUserWithEmailAndPassword,
         sendEmailVerification, signInWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    authState(this.auth).subscribe((user: User | null) => this.currentUserSubject.next(user));
  }

  async signup(email: string, password: string, role: string = 'farmer') {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const uid = userCredential.user.uid;
    await setDoc(doc(this.firestore, `users/${uid}`), { email, role });
    await sendEmailVerification(userCredential.user);
    return userCredential;
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return signOut(this.auth);
  }

  async resetPassword(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async getUserRole(uid: string): Promise<string | null> {
    const snapshot = await getDoc(doc(this.firestore, `users/${uid}`));
    return snapshot.exists() ? (snapshot.data()['role'] as string) : null;
  }

  async currentUserRole(): Promise<string> {
    const user = this.currentUserSubject.value;
    if (!user) return 'guest';
    const role = await this.getUserRole(user.uid);
    return role || 'farmer';
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
