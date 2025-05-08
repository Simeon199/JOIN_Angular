import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-add-task',
  imports: [
    SidebarComponent,
    HeaderComponent,
    DropdownComponent
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

}
