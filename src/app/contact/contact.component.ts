import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-contact',
  imports: [
    SidebarComponent,
    ContactListComponent,
    AddNewContactComponent,
    HeaderComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
