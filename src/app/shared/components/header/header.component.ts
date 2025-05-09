import { Component } from '@angular/core';
import { DropdownService } from '../../services/dropdown.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private dropdownService: DropdownService){}

  toggleDropdown(){
    this.dropdownService.toggle();
  }
}
