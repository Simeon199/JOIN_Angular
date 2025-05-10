import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

import { 
  FormBuilder, 
  FormGroup, 
  ValidationErrors, 
  ReactiveFormsModule, 
  Validators, 
  AbstractControl 
} from '@angular/forms';

import { AuthService } from '../auth.service';
import {tap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      passwordConfirmed: ['', [Validators.required]],
      acceptPrivacy: [false, [Validators.requiredTrue]]
    }, {
      validators: [this.passwordMatchValidator]
    });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    let password = group.get('password')?.value;
    let confirm = group.get('passwordConfirmed')?.value;
    return password === confirm ? null : {passwordMismatch: true};
  }

  onSubmit():void {
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    const {email, password} = this.registerForm.value
    this.authService.register(email, password).pipe(
      tap(() => this.router.navigate(['/login'])),
      catchError(error => {
        console.error('Regisration failed: ', error);
        return EMPTY;
      })).subscribe();
  }
}