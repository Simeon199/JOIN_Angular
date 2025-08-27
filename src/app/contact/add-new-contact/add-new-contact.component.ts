import { Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { AddContactPopUpService } from '../../shared/services/add-contact-pop-up.service';

@Component({
  selector: 'app-add-new-contact',
  imports: [],
  templateUrl: './add-new-contact.component.html',
  styleUrl: './add-new-contact.component.scss'
})
export class AddNewContactComponent implements OnDestroy {
  isHovered:boolean = false;
  isContactPopUpOpen:boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private addContactPopUpService: AddContactPopUpService){
    this.addContactPopUpService.addContactPopUpState$.pipe(takeUntil(this.destroy$)).subscribe(state => this.isContactPopUpOpen = state);
  }

  closeAddContactPopUp(){
    this.addContactPopUpService.close();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
