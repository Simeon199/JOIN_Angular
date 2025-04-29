import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent implements OnInit {
  title = 'JOIN';
  private firestore = inject(Firestore);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }

  async loadTasks(){
    const tasksCollection = collection(this.firestore, 'tasks');
    try{
      const snapshot = await getDocs(tasksCollection);
      this.tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Task
      }));
      console.log('Tasks geladen (Firestore): ', this.tasks);
    } catch(error){
      console.error('Fehler beim Laden der Tasks aus Firestore: ', error);
    }
  }

  async addTask(task: Task){
    const tasksCollection = collection(this.firestore, 'tasks');
    try {
      await addDoc(tasksCollection, task);
      console.log('Task hinzugefügt');
      this.loadTasks(); // Optional neu laden
    } catch(error){
      console.error('Fehler beim Hinzufügen: ', error);
    }
  }
}