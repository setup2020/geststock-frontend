import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, ICategory } from 'src/app/models/category.model';
import { IProduct, Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { Pagination } from 'src/app/utils/request';
declare var $: any;
@Component({
  selector: 'png-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  categories: ICategory[] = [];
  loading = false;
  submitted = false;
  editForm = this.fb.group({
    id: [''],
    reference: ['', [Validators.required]],
    designation: ['', [Validators.required]],
    category: [new Category('','',''), [Validators.required]],
    priceUnitHt: [0, [Validators.required]],
    priceUnitTtc: [0],
    description: [''],
    tva: [0],

  })
  product!: IProduct;
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router,
    private activatedRoute: ActivatedRoute,private productService:ProductService,
    private toastrService: ToastrService,
    ) { }
  ngOnInit(): void {
    this.loadCategories();
    if(this.activatedRoute.snapshot.params['id']){
      this.activatedRoute.data.subscribe({
        next:(res:any)=>{
          this.product=res.category as IProduct;
          this.initForm(this.product);
          
        }
      })
    }
     
  }




  onSelectedCategory(ev: string): void {

  }

  onChangeSearch(ev: string): void {

  }

  loadCategories(req?: Pagination): void {
    this.categoryService.query(req).subscribe({
      next: (res: ICategory[]) => {
        this.categories = res;
      }
    })
  }

  get f(): any {
    return this.editForm.controls;
  }
  save(): void {

    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const { designation, priceUnitHt, priceUnitTtc, id, reference, tva, category } = this.editForm.value as IProduct;
    const product = new Product(reference,designation,priceUnitTtc,priceUnitHt,category,tva,id?Number(id):null);
    this.loading=true;
    this.productService.save(product).subscribe({
      next:()=>{
        this.loading=false;
        this.toastrService.showSuccess("Enregistrement effectué !!");
        this.router.navigate(['/products']);
      },
      error:()=>{
        this.loading=false;
      }
    })
  }

  initForm(product: IProduct):void{
    this.editForm.setValue({
      id:String(product!.id),
      description:product.designation,
      designation:product.designation,
      category:product.category,
      priceUnitHt:product.priceUnitHt,
      priceUnitTtc:product.priceUnitTtc,
      tva:product.tva,
      reference:product.reference
      

      
    })
  }
}
