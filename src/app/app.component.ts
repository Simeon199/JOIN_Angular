import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';
// import { Database, ref, push, get, child } from '@angular/fire/database';
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
  // private db = inject(Database);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.loadTasks();
    // this.createTestTask();
    // this.loadTasks();
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

  // createTestTask(){
  //   const tasksRef = ref(this.db, 'tasks');
  //   const newTask = {
  //     title: 'Testaufgabe',
  //     description: 'Diese Aufgabe wurde automatisch erstellt.',
  //     createdAt: new Date().toISOString()
  //   }
  //   push(tasksRef, newTask)
  //   .then(() => console.log('Task erfolgreich erstellt!'))
  //   .catch((error) => console.error('Fehler beim Erstellen: ', error));
  // };

  // async loadTasks(){
  //   const tasksRef = ref(this.db, 'tasks');
  //   try {
  //     const snapshot = await get(tasksRef);
  //     if(snapshot.exists()){
  //       const data = snapshot.val();
  //       // Convert objekt into array of tasks with IDs
  //       this.tasks = Object.entries(data).map(([key, value]: any) => ({
  //         id: key,
  //         ...value
  //       }));
  //       console.log('Tasks geladen: ', this.tasks);
  //     } else {
  //       console.log('Keine Tasks gefunden.');
  //     }
  //   } catch(error){
  //     console.error('Fehler beim Laden: ', error);
  //   }
  // }
}