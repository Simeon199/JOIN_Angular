import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-summary',
  imports: [
    SidebarComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
