import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-contact',
  imports: [
    SidebarComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
