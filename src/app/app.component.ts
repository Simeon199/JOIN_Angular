import { Component, inject, OnInit } from '@angular/core';
import { Database, ref, get } from '@angular/fire/database';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent implements OnInit {
  title = 'JOIN';
  private db = inject(Database);
  ngOnInit(): void {
    const testRef = ref(this.db, '/test-verbindung');
    get(testRef).then((snapshot) => {
      if(snapshot.exists()){
        console.log('Verbindung erfolgreich! Daten: ', snapshot.val());
      } else {
        console.log('Verbindung steht, aber keine Daten an diesem Pfad.');
      }
    }).catch((error) => {
      console.error('Fehler beim Verbinden mit Firebase: ', error);
    });
  }
}