import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { Customer, ICustomer } from 'src/app/models/customer.model';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'png-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit{
    submitted=false;
    loading=false;
  editForm=this.fb.group({
    email:[''],
    lastName:['',[Validators.required]],
    firstName:[''],
    address1:[''],
    address2:[''],
    country:[''],
    city:[''],
    codePostal:[''],
    id:[0],

    description:[''],
    phone:['']

  })
  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private customerService:CustomerService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.activatedRoute.data.subscribe(res=>{
          if(res['customer']){
            console.log(res['customer']);
            
            this.initForm(res['customer']);
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
    const {lastName,firstName,email,phone,description,address1,address2,codePostal,city,country,id}=this.editForm.value ;
    let address:IAddress={};
    address.address1=address1!;
    address.address2=address2!;
    address.city=city!;
    address.codePostal=codePostal!;
    address.country=country!
    const customer=new Customer(
      lastName!,
      firstName!,
      email!,
      '',
      '',
      address,
      phone!,
      id?Number(id):null

    )
    this.loading=true;
    this.customerService.save(customer).subscribe({
      next:()=>{
        
        this.router.navigate(['/peoples/clients']).then(()=>{
          this.toastrService.showSuccess("Enregistrement effectué  !!");
        })
      },
      error:()=>{
        this.loading=false;
      }
    })
  }

  initForm(customer:ICustomer){
    this.editForm.patchValue({
      id:customer.id,
      lastName:customer.lastName,
      firstName:customer.firstName,
      email:customer.email,
      phone:customer.phone,
      city:customer.address?.city,
      address1:customer.address?.address1,
      address2:customer.address?.address2,
      codePostal:customer.address?.codePostal,
      country:customer.address?.country
    })
  }
}
