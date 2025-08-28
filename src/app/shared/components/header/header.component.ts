import { Component } from '@angular/core';
import { DropdownService } from '../../services/dropdown.service';
import { Router } from '@angular/router';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-header',
  imports: [DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private dropdownService: DropdownService, private router: Router){}

  toggleDropdown(){
    this.dropdownService.toggle();
  }

  redirectToHelpSection(path: string){
    this.router.navigate([path]);
  }
}