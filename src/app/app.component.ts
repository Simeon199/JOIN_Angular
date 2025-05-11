import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { DropdownService } from './shared/services/dropdown.service';
import { Task } from './models/task.model';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'JOIN';
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  tasks: Task[] = [];

  constructor(
    dropdownService: DropdownService,
    private router: Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        dropdownService.close()
      }
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if(user){
        console.log('User is signed in: ', user.uid)
      } else {
        console.log('User is signed out');
      }
    })
  }

  async loadData(category: string){
    const objectCollection = collection(this.firestore, category);
    try{
      const snapshot = await getDocs(objectCollection);
      if(category === 'tasks'){
        this.tasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Task
        }));
        console.log('Tasks geladen (Firestore): ', this.tasks);
      }
    } catch(error){
      console.error('Fehler beim Laden der Tasks aus Firestore: ', error);
    }
  }

  async addDataToFirebase(object: any, category: string){
    let objectCollection = collection(this.firestore, category);
    try {
      await addDoc(objectCollection, object);
      console.log('Task hinzugefügt');
      this.loadData(category); // Optional neu laden
    } catch(error){
      console.error('Fehler beim Hinzufügen: ', error);
    }
  }
}