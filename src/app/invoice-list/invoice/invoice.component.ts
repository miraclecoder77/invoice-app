import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceData:any;
  id: any;
  constructor(private api: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //observble to get id
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    //get all invoices on initialization
    this.api.getAllInvoice().subscribe(data => {
      this.invoiceData = data;
    })
  }


}
