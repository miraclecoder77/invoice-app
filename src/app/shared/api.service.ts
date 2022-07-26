import { InvoiceModel } from './invoice.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl:string = "http://localhost:3000/invoices"
  
  //returns all invoice in  the server
  getAllInvoice() {
    return this.http.get<InvoiceModel[]>(this.baseUrl)
    
  }

  //fetch invoice with id request
  getInvoice(id:number) {
    return this.getAllInvoice().pipe(
      map(invoice => {
        return invoice.filter(i => i.id === id )
      })
    )
  }

  //add invoice to the server
  addInvoice(data:any) {
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map(
      (res) => {
        return res
      }
    ))
  }

  //delete invoice 
  deleteInvoice(id:number) {
    const url = "  http://localhost:3000/invoices/" + id
    return this.http.delete<InvoiceModel[]>(url)
  }

  //edit and update invoice
  editInvoice(data:any, id:number) {
    return this.http.patch<any>(this.baseUrl+id, data)
  }
}
