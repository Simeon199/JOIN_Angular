import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInAnonymously, 
  UserCredential, 
  User, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private auth = getAuth();

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() { 
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    })
  }

  login(email: string, password: string): Observable<UserCredential>{
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string): Observable<UserCredential>{
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  guestLogin():Observable<UserCredential>{
    return from(signInAnonymously(this.auth));
  }

  logout(): Observable<void>{
    return from(signOut(this.auth));
  }

  getCurrentUser(): User|null {
    return this.auth.currentUser;
  }
}