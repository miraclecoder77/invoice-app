import { ApiService } from './../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  invoiceId!: number;
  invoiceData:any;
  constructor(private route:ActivatedRoute,
              private api:ApiService,
              private router: Router) { }

  ngOnInit(): void {
  this.invoiceId = +this.route.snapshot.params["id"];
  this.api.getInvoice(this.invoiceId).subscribe(
    (res) => {
      this.invoiceData = res[0];
      console.log(res)
    }
  )
  }
  edit() {
    // this.api.editInvoice(data, this.invoiceId).subscribe()
  }
  delete() {
    alert('Do you want to delete this');
    this.api.deleteInvoice(this.invoiceId).subscribe();
    this.router.navigateByUrl("");

  }
}
