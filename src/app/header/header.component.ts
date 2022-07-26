import { SidebarToggleService } from './../shared/sidebar-toggle.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropDown = false;
  show = true;

  toggleInvoice!: boolean;
  constructor(private sidebarToggle: SidebarToggleService ) { }

  ngOnInit(): void {
  }


  dropDownToggle() {
    this.showDropDown = !this.showDropDown;
  }

  toggleSidebar() {
    this.sidebarToggle.toggle()
  }

}
