import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddContactPopUpService {
  private addContactPopUpState = new Subject<boolean>();
  addContactPopUpState$ = this.addContactPopUpState.asObservable();
  
  open(){
    this.addContactPopUpState.next(true);
  }

  close(){
    this.addContactPopUpState.next(false);
  }
  
  constructor() { }
}
