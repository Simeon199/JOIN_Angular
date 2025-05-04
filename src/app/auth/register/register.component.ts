import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ValidationErrors, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){}

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
    // Form valid - handle submission (e.g. send to API)
    console.log(this.registerForm.value);
  }
}
