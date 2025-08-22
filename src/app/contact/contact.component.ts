import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-contact',
  imports: [
    SidebarComponent,
    AddNewContactComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
