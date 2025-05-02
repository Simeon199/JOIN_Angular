import { Component } from '@angular/core';
import {NgOptimizedImage } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
}
