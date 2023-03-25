import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { ISupplier, Supplier } from 'src/app/models/supplier.model';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'png-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss'],
})
export class SupplierAddComponent {
  submitted = false;
  loading = false;
  editForm = this.fb.group({
    email: [''],
    lastName: ['', [Validators.required]],
    firstName: [''],
    address1: [''],
    address2: [''],
    country: [''],
    city: [''],
    codePostal: [''],
    id: [0],

    description: [''],
    phone: [''],
  });
  files: File[]=[];
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      if (res['supplier']) {
        this.initForm(res['supplier']);
      }
    });
  }

  get f(): any {
    return this.editForm.controls;
  }
  save(): void {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const {
      lastName,
      firstName,
      email,
      phone,
      description,
      address1,
      address2,
      codePostal,
      city,
      country,
      id,
    } = this.editForm.value;
    let address: IAddress = {};
    address.address1 = address1!;
    address.address2 = address2!;
    address.city = city!;
    address.codePostal = codePostal!;
    address.country = country!;
    const customer = new Supplier(
      lastName!,
      firstName!,
      email!,
      '',
      '',
      address,
      phone!,
      id ? Number(id) : null
    );
    this.loading = true;
    this.supplierService.save(customer).subscribe({
      next: () => {
        this.router.navigate(['/peoples/suppliers']).then(() => {
          this.toastrService.showSuccess('Enregistrement effectué  !!');
        });
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  initForm(customer: ISupplier) {
    this.editForm.patchValue({
      id: customer.id,
      lastName: customer.lastName,
      firstName: customer.firstName,
      email: customer.email,
      phone: customer.phone,
      city: customer.address?.city,
      address1: customer.address?.address1,
      address2: customer.address?.address2,
      codePostal: customer.address?.codePostal,
      country: customer.address?.country,
    });
  }

  onFileDroppedEn(ev:any):void{
  
    this.files = Object.keys(ev.target.files).map(key => ev.target.files[key]);
    console.log(this.files);
    
  }

  onRemove(event:any):void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}
}
