import { SidebarToggleService } from './../shared/sidebar-toggle.service';
import { ApiService } from './../shared/api.service';
import { InvoiceModel } from './../shared/invoice.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  show = false;

  toggleInvoice = false;
  
  invoiceForm: FormGroup
  invoice:InvoiceModel;

  constructor(private fb: FormBuilder,
              private api:ApiService,
              private sidebarToggle: SidebarToggleService) { }

  ngOnInit(): void {
    // initialize the form
    this.invoiceForm = this.fb.group({
      address: ["", Validators.required],
      city: ["", Validators.required],
      postcode: ["", Validators.required],
      country: ["", Validators.required],
      clientName: ["", Validators.required],
      clientEmail: ["", Validators.email],
      clientStreet: ["", Validators.required],
      clientCity: ["", Validators.required ],
      clientPostcode: ["", Validators.required],
      clientCountry: ["", Validators.required],
      date: ["", Validators.required],
      paymentTerm: ["", Validators.required],
      description: ["", Validators.required],
      itemName: ["", Validators.required],
      itemQty: ["", Validators.required],
      itemPrice: ["", Validators.required],
      itemTotal: ["", Validators.required]
    })
  }

  toggleSidebar() {
    this.sidebarToggle.toggle()
  }

  submit() {

    this.invoice = new InvoiceModel();

    // map the invoice model to the form data
    this.invoice.address = this.invoiceForm.value.address;
    this.invoice.city = this.invoiceForm.value.city;
    this.invoice.postcode = this.invoiceForm.value.postcode;
    this.invoice.country = this.invoiceForm.value.country;
    this.invoice.clientName = this.invoiceForm.value.clientName;
    this.invoice.clientStreet = this.invoiceForm.value.clientStreet;
    this.invoice.clientCity = this.invoiceForm.value.clientCity;
    this.invoice.clientPostcode = this.invoiceForm.value.clientPostcode;
    this.invoice.clientCountry = this.invoiceForm.value.clientCountry;
    this.invoice.date = this.invoiceForm.value.date;
    this.invoice.paymentTerm = this.invoiceForm.value.paymentTerm;
    this.invoice.description = this.invoiceForm.value.description;
    this.invoice.itemName = this.invoiceForm.value.itemName;
    this.invoice.itemQty = this.invoiceForm.value.itemQty;
    this.invoice.itemPrice = this.invoiceForm.value.itemPrice;
    this.invoice.itemTotal = this.invoiceForm.value.itemTotal;
    
    // post data to the server
    this.api.addInvoice(this.invoice)
      .subscribe({
        next: (res) => {
          alert('posted succesfully');
          this.invoiceForm.reset();
        },
        error: err => {
          alert('Oops, somthing went wrong')
        }
      });

      if( this.invoiceForm.invalid) {
        return;
      }

    

  }
}


