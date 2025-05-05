import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously, User, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private auth = getAuth();

  constructor(private router: Router) { }

  login(email: string, password: string): Promise<User>{
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((credential) => {
        return credential.user;
      });
  }

  register(email: string, password: string): Promise<User>{
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((credential) => {
        return credential.user
      });
  }

  guestLogin():Promise<User>{
    return signInAnonymously(this.auth)
      .then((credential) => {
        return credential.user;
      });
  }

  logout(): Promise<void>{
    return signOut(this.auth)
      .then(() => {
        console.log('Sign out successfull');
        this.router.navigate(['/login']);
      }).catch((error) => {
        console.error('Sign Out unsuccessfull. Error happened: ', error.message);
      });
  }

  getCurrentUser(): User|null {
    return this.auth.currentUser;
  }
}
