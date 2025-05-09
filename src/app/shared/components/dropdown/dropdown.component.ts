import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownService } from '../../services/dropdown.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dropdown',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  constructor(private authService: AuthService){}

  isOpen = inject(DropdownService).isOpen;

  logoutUser(){
    this.authService.logout().catch(error => {
      console.error('Logout failed: ', error);
    });
  }
}
