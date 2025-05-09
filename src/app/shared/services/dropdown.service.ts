import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor() { }
  
  private _isOpen = signal(false);

  isOpen = this._isOpen.asReadonly(); // Nur lesbar von außen

  toggle(){
    this._isOpen.update(value => !value);
  }

  open(){
    this._isOpen.set(true);
  }

  close(){
    this._isOpen.set(false);
  }
}