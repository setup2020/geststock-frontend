import { Component, OnInit } from '@angular/core';
import { ResponseBody } from 'src/app/models/responseBody';
import { IRole, STATUS } from 'src/app/models/role.model';
import { Pagination } from 'src/app/utils/request';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'png-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  response:ResponseBody<IRole>={};
  STATUS=STATUS;
  req:Pagination={
    page:0,
    size:10
  }

  constructor(private roleService: RoleService) {
    this.response={
      content:[]
    };
  }
  ngOnInit(): void {
    this.loadRoles(this.req);
  }

  loadRoles(req?:Pagination): void {
    this.roleService.query(req).subscribe({
      next: (res: ResponseBody<IRole>) => {
        this.response=res;
      },
    });
  }

  move(id: number) {
    if(confirm("Voullez-vous supprimer ce rôle ?")){
      this.roleService.delete(id).subscribe({
        next:()=>{
         this.response.content= this.response!.content!.filter(c=>c.id!==id);
        }
      })
    }
  }
}
