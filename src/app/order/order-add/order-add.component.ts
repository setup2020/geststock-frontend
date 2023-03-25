import { Component, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { OrderSupplier, STATUS_ORDER_SUPPLIER } from 'src/app/models/lineOrderSupplier.model';
import { IProduct } from 'src/app/models/product.model';
import { ISupplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/people/services/supplier.service';
import { OrderSupplierService } from 'src/app/services/order-supplier.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'png-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    }
  ];
  STATUS_ORDER_SUPPLIER=STATUS_ORDER_SUPPLIER;
submitted=false;
loading=false;
 editForm=this.fb.group({
    id:[''],
    reference:['',[Validators.required]],
    dateOrder:['',[Validators.required]],
    supplier:['',[Validators.required]],
    status:['',[Validators.required]],
    description:[''],
    products:this.fb.array([]),
    item:[''],
    rabais:[0]
 });
  productsData: IProduct[]=[];
  suppliers: ISupplier[]=[];

  constructor(
    private fb:UntypedFormBuilder,
    private  supplierService:SupplierService,
    private productService:ProductService,
    private orderSupplierService:OrderSupplierService
    ){}

  ngOnInit(): void {

  
  }

  get products():any{
    return this.editForm.controls["products"] as FormArray;
  };

  addProduct(data:any):void{
    const productsFrom=this.fb.group({
      name:[data.name],
      quantity:['',[Validators.required]],
      price:['', [Validators.required]],
      remise:[0],
      tva:[19.24]
    });
    this.products.push(productsFrom!);


    
  }

  deleteProduct(index:number):void{
    this.products.removeAt(index);
  }



  loadProducts():void{
    this.productService.query().subscribe({
      next:(res:IProduct[])=>{
        this.productsData=res;

      },
      error:()=>{

      }
    })
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


  selectEvent(item:any,type?:string) {
    console.log(this.products);
     if(type==="PRODUCT"){
      this.addProduct(item);
      this.editForm.get("item")?.setValue("");
     }

     
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }

  get f():any{
    return this.editForm.controls;
  }

  save():void{
    this.submitted=true;
    if(this.editForm.invalid){
      return;
    }
    this.loading=true;
    const {id,status,dateOrder,reference,products,rabais,supplier,description}=this.editForm.value;

    let orderSupplier=new OrderSupplier();
    orderSupplier.dateOrder=dateOrder;
    orderSupplier.status=status;
    orderSupplier.id=id;
    orderSupplier.reference=reference;
    orderSupplier.rabais=rabais;
    orderSupplier.supplier=supplier;
    orderSupplier.description=description;

    console.log(orderSupplier);
    

  }

  


}
