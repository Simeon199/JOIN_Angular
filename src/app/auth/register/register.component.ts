import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ValidationErrors, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

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
    const {email, password} = this.registerForm.value // Mit Destructuring werden nur die Informationen email und password geholt
    const auth = getAuth(); // Authentifizierungsinstanz wird aufgerufen. Innerhalb von auth stecken nun alle Registrierungs - und Loginmethoden, die ich implementieren kann.
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registred: ', user.email);
      }).catch((error) => {
        console.error('Registration error: ', error.message);
      })
  }
}
