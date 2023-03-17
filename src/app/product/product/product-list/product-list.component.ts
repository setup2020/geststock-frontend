import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'png-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:IProduct[]=[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.query().subscribe({
      next: (res: IProduct[]) => {
        this.products = res;
      },
    });
  }

  move(id: number) {
    if(confirm("Voullez-vous supprimer cette categorie ?")){
      this.productService.delete(id).subscribe({
        next:()=>{
         this.products= this.products.filter(p=>p.id!==id);
        }
      })
    }
  }
}
