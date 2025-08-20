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
  selectedUrgencyIcon:string = 'medium'; 
  colorClass:string = 'orange';
  default:string = 'white';
  statusTaskCategoryDropdownArrowDown:boolean = true;
  statusContactsDropdownArrowDown:boolean = true;  

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

  invertStatusDropdownArray(input:string){
    if(input === 'contactInput'){
      this.statusContactsDropdownArrowDown = !this.statusContactsDropdownArrowDown;
      this.checkContactsDropdown();
    } else if(input === 'taskCategoryInput'){
      this.statusTaskCategoryDropdownArrowDown = !this.statusTaskCategoryDropdownArrowDown;
      this.checkTaskCategoryDropdown();
    }
  }

  checkTaskCategoryDropdown(){
    if(this.statusTaskCategoryDropdownArrowDown){
      this.hideTaskCategoryDropdown();
    } else if(!this.statusTaskCategoryDropdownArrowDown) {
      this.showTaskCategoryDropdown = true;
    }
    return ;
  }

  checkContactsDropdown(){
    if(this.statusContactsDropdownArrowDown){
      this.hideContactsDropdown();
    } else if(!this.statusContactsDropdownArrowDown) {
      this.showContactsDropdown = true;
    }
    return ;
  }

  selectUrgencyIcon(urgencyStatus:string, colorClass:string){
    this.selectedUrgencyIcon = urgencyStatus;
    this.colorClass = colorClass;
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
