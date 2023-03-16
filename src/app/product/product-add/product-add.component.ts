import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
declare var $:any;
@Component({
  selector: 'png-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
  
  }

  


  

}
