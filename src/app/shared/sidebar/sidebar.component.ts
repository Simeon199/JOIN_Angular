import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  currentLocation: string =  '';

  constructor(private router: Router){
    this.currentLocation = this.router.url;
    this.returnCurrentLocation();
  }

  returnCurrentLocation(){
    console.log('return current location: ', this.currentLocation);
  }

  highlightLink(path: string){
    if(this.doesPathCoincide(path)){
      return true;
    } else {
      return false;
    }
  }

  doesPathCoincide(path: string){
    return path === this.currentLocation;
  }
}