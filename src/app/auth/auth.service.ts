import { Injectable } from '@angular/core';

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInAnonymously, 
  UserCredential, 
  User, 
  signOut 
} from 'firebase/auth';

import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private auth = getAuth();

  constructor() { }

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