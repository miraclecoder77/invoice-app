import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  constructor() { }
  changeTheme() {
    document.documentElement.style.setProperty('--bgprimary', 'rgb(248, 248, 251)');
    document.documentElement.style.setProperty('--textprimary', 'rgb(12, 14, 22)');
    document.documentElement.style.setProperty('--bginvoice', 'white');
    document.documentElement.style.setProperty('--bgsecondary', 'rgb(248, 248, 251)');
}

  defaultTheme() {
    document.documentElement.style.setProperty('--bgprimary', 'rgb(20, 22, 37)'  );
    document.documentElement.style.setProperty('--textprimary', 'white');
    document.documentElement.style.setProperty('--bginvoice', 'rgb(30, 33, 57)');
    document.documentElement.style.setProperty('--bgsecondary', 'rgb(37, 41, 69)');
  }

}
