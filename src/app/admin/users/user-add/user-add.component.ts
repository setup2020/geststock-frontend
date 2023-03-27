import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { IRole } from 'src/app/models/role.model';
import { IUser, User } from 'src/app/models/user.model';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'png-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  submitted=false;
  loading=false;
editForm=this.fb.group({
  email:[''],
  lastName:['',[Validators.required]],
  username:['',[Validators.required]],
  firstName:[''],
  address1:[''],
  address2:[''],
  country:[''],
  city:[''],
  codePostal:[''],
  dateBirth:[''],
  id:[0],
  description:[''],
  phone:['']

})
  roles: IRole[]=[];
constructor(
  private fb:FormBuilder,
  private activatedRoute:ActivatedRoute,
  private toastrService:ToastrService,
  private userService:UserService,
  private roleService:RoleService,
  private router:Router
){}

ngOnInit(): void {
  this.loadRoles();
   this.activatedRoute.data.subscribe(res=>{
        if(res['user']){
          this.initForm(res['user']);
        }
   })
}

loadRoles():void{

  this.roleService.query({page:0,size:100000}).subscribe({
    next:(roles:IRole[])=>{
      this.roles=roles;
      console.log(roles);
      
    },
    error:()=>{

    }
  })
}

get f():any{
  return this.editForm.controls;
}
save():void{
  this.submitted=true;
  if(this.editForm.invalid){
    return;
  }
  const {username,lastName,firstName,email,phone,address1,address2,codePostal,city,country,id,dateBirth}=this.editForm.value ;
  let address:IAddress={};
  address.address1=address1!;
  address.address2=address2!;
  address.city=city!;
  address.codePostal=codePostal!;
  address.country=country!
  let customer:IUser={
    username:username!,
    address:address,
    lastName:lastName!,
    firstName:firstName!,
    email:email!,
    phone:phone!,
    id:id?id:null,
    dateBirth:dateBirth!,
    password:''
  }
  this.loading=true;
  this.userService.save(customer).subscribe({
    next:()=>{
      
      this.router.navigate(['/admins/users/list']).then(()=>{
        this.toastrService.showSuccess("Enregistrement effectué  !!");
      })
    },
    error:()=>{
      this.loading=false;
    }
  })
}

initForm(user:IUser){
  this.editForm.patchValue({
    id:user.id,
    lastName:user.lastName,
    firstName:user.firstName,
    email:user.email,
    phone:user.phone,
    city:user.address?.city,
    address1:user.address?.address1,
    address2:user.address?.address2,
    codePostal:user.address?.codePostal,
    country:user.address?.country,
    dateBirth:user.dateBirth,
    username:user.username
  })
}
}
