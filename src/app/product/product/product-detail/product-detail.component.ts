import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'png-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product!:IProduct;

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
     this.activatedRoute.data.subscribe(res=>{
      this.product=res['product'] as IProduct;
      console.log(this.product);
      
     })
  }

}
