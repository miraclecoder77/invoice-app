import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice-list/invoice/invoice.component';
import { InvoiceDetailsComponent } from './invoice-list/invoice-details/invoice-details.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarToggleService } from './shared/sidebar-toggle.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InvoiceListComponent,
    HeaderComponent,
    DashboardComponent,
    InvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SidebarToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
