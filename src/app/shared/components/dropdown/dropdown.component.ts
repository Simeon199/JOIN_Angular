import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownService } from '../../services/dropdown.service';
import { CommonModule } from '@angular/common';

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
  isOpen = inject(DropdownService).isOpen;
}
