import { InvoiceDetailsComponent } from './invoice-list/invoice-details/invoice-details.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path:"dashboard", component:DashboardComponent},
  {path:"dashboard/invoice/:id", component:InvoiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
