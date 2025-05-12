import { Injectable } from '@angular/core';
import {map, Observable, fromEvent, startWith} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  screenWidth$: Observable<number>;

  constructor(){
    this.screenWidth$ = fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth),
      startWith(window.innerWidth) // Initialwert beim Start
    );
  }
}