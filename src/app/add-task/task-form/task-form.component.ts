import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  showContactsDropdown:boolean = false;
  showTaskCategoryDropdown:boolean = false;
  selectedTaskCategory:string = '';
  selectedContact:string = '';
  contacts:Array<string> = ['Mark', 'Anton'];
  taskCategories:Array<string> = ['Technical Task', 'User Story'];
  filteredContacts = this.contacts;

  addTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    assignedTo: new FormControl(''),
    date: new FormControl(''),
    prio: new FormControl(''),
    category: new FormControl(''),
    subtasks: new FormControl('')
  });

  onInput(event: Event){
    let value = (event.target as HTMLInputElement).value;
    this.filteredContacts = this.contacts.filter(contact => 
      contact.toLowerCase().includes(value.toLowerCase())
    );
  }

  selectContact(contact: string){
    this.selectedContact = contact;
    this.showContactsDropdown = false;
  }

  selectTaskCategory(taskCategory: string){
    this.selectedTaskCategory = taskCategory;
    this.showTaskCategoryDropdown = false;
  }

  hideContactsDropdown(){
    setTimeout(() => this.showContactsDropdown = false, 200) 
  }

  hideTaskCategoryDropdown(){
    setTimeout(() => this.showTaskCategoryDropdown = false, 200)
  }
}
