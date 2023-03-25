import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'png-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: IUser[]=[];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    
    this.loadCustomers();
  }

  loadCustomers():void{
    this.userService.query().subscribe({
      next:(res:IUser[])=>{
        this.users=res;
      },
      error:()=>{

      }
    })
  }


  move(id: number) {
    if(confirm("Voullez-vous supprimer cet utilisateur ?")){
      this.userService.delete(id).subscribe({
        next:()=>{
         this.users= this.users.filter(c=>c.id!==id);
        }
      })
    }
  }
}
