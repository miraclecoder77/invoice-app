import { SidebarToggleService } from './shared/sidebar-toggle.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-app';

  toggleInvoice!: boolean;
  
  constructor(public SidebarService: SidebarToggleService) {}
  
  

}
