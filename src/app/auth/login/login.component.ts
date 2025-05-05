import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

@Component({
  selector: 'app-login',
  imports: [ 
    CommonModule, 
    RouterLink, 
    ReactiveFormsModule  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  loginError: null | string = null;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    const {email, password} = this.loginForm.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in: ', user.email);
      })
      .catch((error) => {
        console.error('Login error: ', error.message);
        this.loginError = 'Invalid email or password';
      })
  }

  guestLogin(){
    const auth = getAuth();
    signInAnonymously(auth)
      .then((userCredential) => {
        console.log('Guest user:', userCredential.user.uid);
      })
      .catch((error) => {
        console.error('Guest login error: ', error.message);
      });
  }
}
