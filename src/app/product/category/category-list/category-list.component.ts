import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'png-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.query().subscribe({
      next: (res: ICategory[]) => {
        this.categories = res;
      },
    });
  }

  move(id: number) {
    if(confirm("Voullez-vous supprimer cette categorie ?")){
      this.categoryService.delete(id).subscribe({
        next:()=>{
         this.categories= this.categories.filter(c=>c.id!==id);
        }
      })
    }
  }
}
