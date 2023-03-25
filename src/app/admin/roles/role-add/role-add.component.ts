import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRole, Role, STATUS } from 'src/app/models/role.model';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'png-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent {


  STATUS=STATUS;
  submitted = false;
  loading = false;
  editForm = this.fb.group({
    name: ['', [Validators.required]],
    status: [''],
    id: ['']
  })
  role!: IRole;
  constructor(
    private toastrService: ToastrService,
     private fb: FormBuilder, 
     private roleService: RoleService,
     private router:Router,
     private activatedRoute:ActivatedRoute
     ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['id']){
      this.activatedRoute.data.subscribe({
        next:(res:any)=>{
          this.role=res.role as IRole;
          this.initForm(this.role);
          
        }
      })
    }
     
  }



  get f(): any {
    return this.editForm.controls;
  }


  
  save(): void {
   
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const { name, status, id } = this.editForm.value;

    const role = new Role(
      name!,
      status!,
       (id?Number(id):null)
    );

    console.log(role);
    
    this.loading=true;

    this.roleService.save(role).subscribe({
      next: () => {
        this.loading=false;
        this.toastrService.showSuccess("Enregistrement effectué !!!");

        this.router.navigate(['/admins/roles/list']);
      },
      error:()=>{
        this.loading=false;
        
       // this.toastrService.showSuccess("Une erreur c'est produite !!!");
      }
    });

  }

  initForm(role: IRole): void {
    this.editForm.patchValue({
      name: role.name,
      status: role.status,
      id: String(role.id)
    })
  }

  
}
