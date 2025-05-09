import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-board',
  imports: [
    SidebarComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}