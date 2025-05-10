import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { DropdownService } from '../../services/dropdown.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';
import {tap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';

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

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  isOpen = inject(DropdownService).isOpen;

  logoutUser(){
    this.authService.logout().pipe(
      tap(() => this.router.navigate(['/login'])),
      catchError((error) => {
        console.error('Error on logout attempt: ', error);
        return EMPTY;
      })
    ).subscribe();
  }
}
