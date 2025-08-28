import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-add-task',
  imports: [
    SidebarComponent,
    HeaderComponent,
    TaskFormComponent
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

}
