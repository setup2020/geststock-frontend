import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ResponseBody } from 'src/app/models/responseBody';
import { ProductService } from 'src/app/services/product.service';
import { Pagination } from 'src/app/utils/request';

@Component({
  selector: 'png-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:IProduct[]=[];
response:ResponseBody<IProduct>={};
req:Pagination={
  page:0,
  size:10
}

  constructor(private productService: ProductService) {
    this.response={
      content:[]
    }
  }
  ngOnInit(): void {
 
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.query().subscribe({
      next: (res: ResponseBody<IProduct>) => {
        this.response=res;
        this.products =this.response.content!;
      },
    });
  }

  move(id: number) {
    if(confirm("Voullez-vous supprimer cet article ?")){
      this.productService.delete(id).subscribe({
        next:()=>{
         this.products= this.products.filter(p=>p.id!==id);
        }
      })
    }
  }
}
