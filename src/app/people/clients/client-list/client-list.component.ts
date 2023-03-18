import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'png-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  customers: ICustomer[]=[];

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    
    this.loadCustomers();
  }

  loadCustomers():void{
    this.customerService.query().subscribe({
      next:(res:ICustomer[])=>{
        this.customers=res;
      },
      error:()=>{

      }
    })
  }


  move(id: number) {
    if(confirm("Voullez-vous supprimer ce client ?")){
      this.customerService.delete(id).subscribe({
        next:()=>{
         this.customers= this.customers.filter(c=>c.id!==id);
        }
      })
    }
  }
}
