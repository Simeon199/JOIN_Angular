import { Component } from '@angular/core';
import { AddContactPopUpService } from '../../shared/services/add-contact-pop-up.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  constructor(private addContactPopUpService: AddContactPopUpService){}

  openAddContactPopUp(){
    this.addContactPopUpService.open();
  }
}
