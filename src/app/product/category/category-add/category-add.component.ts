import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'png-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  subtmitted = false;
  loading = false;
  editForm = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    description: [''],
    id: ['']
  })
  category!: ICategory;
  constructor(
    private toastrService: ToastrService,
     private fb: FormBuilder, 
     private categoryService: CategoryService,
     private router:Router,
     private activatedRoute:ActivatedRoute
     ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['id']){
      this.activatedRoute.data.subscribe({
        next:(res:any)=>{
          this.category=res.category as ICategory;
          this.initForm(this.category);
          
        }
      })
    }
     
  }



  get f(): any {
    return this.editForm.controls;
  }


  
  save(): void {
   
    this.subtmitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const { name, code, description, id } = this.editForm.value;

    const category = new Category(
      name!,
      code!,
      description!,
       (id?Number(id):null)
    );

    console.log(category);
    
    this.loading=true;

    this.categoryService.save(category).subscribe({
      next: () => {
        this.loading=false;
        this.toastrService.showSuccess("Enregistrement effectué !!!");

        this.router.navigate(['/categories']);
      },
      error:()=>{
        this.loading=false;
      }
    });

  }

  initForm(category: ICategory): void {
    console.log(category);
    
    this.editForm.patchValue({
      name: category.name,
      code: category.code,
      id: String(category.id)
    })
  }

}
