import { Component } from '@angular/core';
import { AddContactPopUpService } from '../../shared/services/add-contact-pop-up.service';

@Component({
  selector: 'app-add-new-contact',
  imports: [],
  templateUrl: './add-new-contact.component.html',
  styleUrl: './add-new-contact.component.scss'
})
export class AddNewContactComponent {
  isHovered:boolean = false;
  isContactPopUpOpen:boolean = false;

  constructor(private addContactPopUpService: AddContactPopUpService){
    this.addContactPopUpService.addContactPopUpState$.subscribe(state => this.isContactPopUpOpen = state);
  }

  closeAddContactPopUp(){
    this.addContactPopUpService.close();
  }
}
