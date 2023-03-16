import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Injectable({
  providedIn: 'root'
})
export class FindCategoryResolver implements Resolve<ICategory> {
  constructor(private categoryService: CategoryService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.categoryService.show(Number(route.paramMap.get('id')));
  }
}
