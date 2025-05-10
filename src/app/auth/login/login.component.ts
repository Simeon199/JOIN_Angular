import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

import { 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule, 
  Validators
} from '@angular/forms';

import { AuthService } from '../auth.service';
import {tap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';


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

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService , 
    private router: Router
  ){}

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
    this.authService.login(email, password).pipe(
      tap(() => this.router.navigate(['/summary'])),
      catchError(error => {
        console.error('Login error', error);
        return EMPTY;
      })
    ).subscribe();
  }

  guestLogin(){
    this.authService.guestLogin().pipe(
      tap(() => this.router.navigate(['/summary'])),
      catchError(error => {
        console.error('Guest Log in failed: ', error);
        return EMPTY;
      })
    ).subscribe();
  }
}