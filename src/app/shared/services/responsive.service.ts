import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {tap, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  isSmallScreen$: Observable<boolean>;
  constructor(private breakPointObserver: BreakpointObserver) { 
    this.isSmallScreen$ = this.breakPointObserver.observe([Breakpoints.Handset])
      .pipe(
        tap(result => {
          console.log('result value: ', result),
          console.log('Aktuelle Bildschirmbreite: ', window.innerWidth);
        }),
        map(result => result.matches)
      );
  }
}