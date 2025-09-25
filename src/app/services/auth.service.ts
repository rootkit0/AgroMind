import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Auth, authState, User, createUserWithEmailAndPassword, 
         sendEmailVerification, signInWithEmailAndPassword, 
         sendPasswordResetEmail, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    authState(this.auth).subscribe((user: User | null) => {
      this.currentUserSubject.next(user);
    });
  }

  async signup(email: string, password: string, role: string = 'user') {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const uid = userCredential.user?.uid;

    if (uid) {
      const userRef = doc(this.firestore, `users/${uid}`);
      await setDoc(userRef, { email, role });
    }

    if (userCredential.user) {
      await sendEmailVerification(userCredential.user);
    }

    return userCredential;
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async resetPassword(email: string) {
    return await sendPasswordResetEmail(this.auth, email);
  }

  async sendVerificationEmail() {
    if (this.auth.currentUser) {
      await sendEmailVerification(this.auth.currentUser);
    }
  }

  async getUserRole(uid: string): Promise<string | null> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const snapshot = await getDoc(userRef);
    return snapshot.exists() ? (snapshot.data()['role'] as string) : null;
  }

  async logout() {
    return await signOut(this.auth);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
