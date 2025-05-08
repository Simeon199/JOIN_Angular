import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  currentLocation: string =  '';

  constructor(private router: Router){
    this.currentLocation = this.router.url;
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

  routeToClickedSite(path: string){
    this.router.navigate([path]);
  }
}