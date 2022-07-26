import { ThemeToggleService } from './../theme-toggle.service';
import { Component, OnInit } from '@angular/core';
import * as jquerry from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  show:boolean = false
  

  constructor(private themeToggle:ThemeToggleService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.show = !this.show
    this.themeToggle.changeTheme()
  }
  
  resetTheme() {
    this.show = !this.show
    this.themeToggle.defaultTheme();
  }

  toggleModal() {
    const modal = document.getElementById('modal');
  }

}
