import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {

  opener = new BehaviorSubject(false);
  opener$ = this.opener.asObservable();
  constructor() { }
    

  toggle() { 
    this.opener.next(!this.opener.value);
    
  }


}
