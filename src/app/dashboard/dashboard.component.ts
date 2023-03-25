import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'png-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  nbre!: { customer: number; supplier: number; };

constructor(private dashboardService:DashboardService){
  this.nbre={customer:0,supplier:0}

}

  ngOnInit(): void {
   this.count();
  }

  count():void{
    this.dashboardService.count().subscribe({
      next:(res)=>{
        this.nbre=res;
      }
    })
  }

}
