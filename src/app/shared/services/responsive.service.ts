import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  isSmallScreen$: Observable<boolean>;
  constructor(private breakPointObserver: BreakpointObserver) { 
    this.isSmallScreen$ = this.breakPointObserver.observe([Breakpoints.Handset])
      .pipe(map(result => result.matches));
  }
}
