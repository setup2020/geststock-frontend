import { Component } from '@angular/core';
import { ISupplier } from 'src/app/models/supplier.model';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'png-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent {
  suppliers: ISupplier[]=[];

  constructor(private supplierService:SupplierService){}

  ngOnInit(): void {
    
    this.loadSuppliers();
  }

  loadSuppliers():void{
    this.supplierService.query().subscribe({
      next:(res:ISupplier[])=>{
        this.suppliers=res;
      },
      error:()=>{

      }
    })
  }


  move(id: number) {
    if(confirm("Voullez-vous supprimer ce fournisseurs ?")){
      this.supplierService.delete(id).subscribe({
        next:()=>{
         this.suppliers= this.suppliers.filter(s=>s.id!==id);
        }
      })
    }
  }
}
